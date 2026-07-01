const lambdaEndpoint = "https://your-api-id.execute-api.region.amazonaws.com/prod/resume-question";
const form = document.getElementById("resume-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const prompt = document.getElementById("resume-prompt").value.trim();
  if (!prompt) {
    return;
  }

  const payload = {
    prompt,
    source: "resume-page",
  };

  console.log("Prompt payload ready for AWS Lambda:", payload);
  console.log("Lambda endpoint:", lambdaEndpoint);

  // The actual request is intentionally disabled.
  // Example implementation:
  // fetch(lambdaEndpoint, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
});
