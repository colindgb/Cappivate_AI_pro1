document.addEventListener("DOMContentLoaded", () => {
    const platforms = ["Facebook", "Instagram", "X (Twitter)", "TikTok", "YouTube"];
    let container = document.getElementById("socialMediaLinker");

    let select = document.createElement("select");
    select.innerHTML = "<option value=''>Select Platform</option>";
    platforms.forEach(platform => {
        select.innerHTML += `<option value="${platform}">${platform}</option>`;
    });

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter profile URL";

    let button = document.createElement("button");
    button.textContent = "Link Account";
    button.onclick = async () => {
        let platform = select.value;
        let profileUrl = input.value;
        if (!platform || !profileUrl) return alert("Please select a platform and enter a URL.");

        let response = await fetch("/api/link", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: "user123", platform, profileUrl })
        });

        let data = await response.json();
        alert(data.message);
    };

    container.appendChild(select);
    container.appendChild(input);
    container.appendChild(button);
});