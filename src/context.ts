import tar from "https://cdn.jsdelivr.net/gh/tsirysndr/tar/mod.ts";
import { nanoid } from "https://esm.sh/nanoid@4.0.2";
import { green } from "https://deno.land/std@0.129.0/fmt/colors.ts";
import { TerminalSpinner } from "https://deno.land/x/spinners@v1.1.2/mod.ts";
import { SpinnerTypes } from "https://deno.land/x/spinners@v1.1.2/spinner-types.ts";

export async function uploadContext(src = ".", exclude: string[] = []) {
  const id = nanoid();
  const context = `/tmp/${id}.tar`;
  let spinner;

  spinner = log(`Compressing ${green(src)} to ${green(context)}`);
  await tar.compress(src, context, { exclude });
  spinner.succeed(`Compressed ${green(src)} to ${green(context)}`);

  const form = new FormData();
  const blob = new File([await Deno.readFile(context)], context);
  form.append("context", blob);

  const sessionToken = Deno.env.get("FLUENTCI_TOKEN");

  const host = Deno.env.get("FLUENTCI_HOST") || "localhost:8486";
  const scheme =
    host.startsWith("localhost") ||
    host.split(":")[0].match(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/)
      ? "http"
      : "https";

  const url = `${scheme}://${host}/context`;

  spinner = log(`Uploading ${green(context)} to ${green(url)}`);

  await fetch(url, {
    method: "POST",
    body: form,
    headers: {
      Authorization: "Basic " + btoa(sessionToken + ":"),
      "X-FluentCI-Session-ID": Deno.env.get("FLUENTCI_SESSION_ID") || "",
    },
  });

  spinner.succeed(`Uploaded ${green(context)}`);

  await Deno.remove(context);
}

function log(text: string) {
  const terminalSpinner = new TerminalSpinner({
    text, // telling the user what is going on
    color: "red", // see colors in util.ts
    spinner: SpinnerTypes.dots, // check the SpinnerTypes - see import
    indent: 0, // The level of indentation of the spinner in spaces
    cursor: false, // Whether or not to display a cursor when the spinner is active
    writer: Deno.stdout, // anything using the Writer interface incl. stdout, stderr, and files
  });

  terminalSpinner.start();
  return terminalSpinner;
}
