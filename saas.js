document.addEventListener("DOMContentLoaded", () => {
    const examples = [
        "Google Workspace (Gmail, Google Docs, etc.)",
        "Microsoft 365",
        "Salesforce",
        "Slack",
        "Zoom"
    ];

    const examplesList = document.getElementById("saas-examples");

    examples.forEach(example => {
        const listItem = document.createElement("li");
        listItem.textContent = example;
        examplesList.appendChild(listItem);
    });
});
