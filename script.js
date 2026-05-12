function scrollToAnalyzer() {
    document.getElementById("analyzer").scrollIntoView({ behavior: "smooth" });
}

let chart; // to control graph

function analyzeSkills() {

    let role = document.getElementById("role").value;
    let input = document.getElementById("skills").value.toLowerCase();

    let userSkills = input.split(",").map(s => s.trim());

    let roles = {

        data: ["excel","sql","python","statistics","powerbi","communication","data cleaning","visualization","analysis","reporting"],

        ai: ["python","machine learning","deep learning","nlp","statistics","tensorflow","pandas","data preprocessing","math","communication"],

        web: ["html","css","javascript","react","node","mongodb","git","api","responsive design","debugging"],

        dev: ["c","java","python","dsa","oop","git","problem solving","debugging","algorithms","communication"],

        cyber: ["networking","security","cryptography","ethical hacking","linux","firewalls","risk analysis","incident response","python","communication"],

        cloud: ["aws","azure","gcp","docker","kubernetes","networking","linux","security","monitoring","automation"],

        ml: ["python","machine learning","data","statistics","tensorflow","pytorch","feature engineering","model tuning","math","communication"],

        ui: ["figma","design","wireframe","prototype","ux research","usability","color theory","typography","creativity","communication"],

        mobile: ["java","kotlin","flutter","react native","api","firebase","ui","debugging","testing","git"],

        game: ["c++","unity","unreal","physics","animation","graphics","math","logic","debugging","creativity"]
    };

    let required = roles[role];

    let match = 0;
    let missing = [];

    for (let skill of required) {
        if (userSkills.includes(skill)) {
            match++;
        } else {
            missing.push(skill);
        }
    }

    let percent = Math.round((match / required.length) * 100);

    // show loader
    document.getElementById("loader").classList.remove("hidden");

    setTimeout(() => {

        document.getElementById("loader").classList.add("hidden");

        // RESULT OUTPUT
        document.getElementById("result").innerHTML = `
            <h3>Match Score: ${percent}%</h3>
            <p><b>Matched Skills:</b> ${match}</p>

            <p><b>Missing Skills:</b></p>
            <ul>${missing.map(s => `<li>${s}</li>`).join("")}</ul>

            <p><b>Learning Path:</b> Start with ${missing.slice(0,3).join(", ")}</p>
        `;

        // GRAPH DATA (based on role)
        let demand = {
            data: [30, 45, 60, 75, 90],
            ai: [20, 35, 55, 70, 95],
            web: [40, 55, 65, 80, 92],
            dev: [50, 60, 70, 85, 95],
            cyber: [25, 40, 60, 80, 93],
            cloud: [35, 50, 70, 85, 97],
            ml: [20, 40, 65, 85, 98],
            ui: [30, 45, 55, 70, 85],
            mobile: [25, 40, 55, 70, 88],
            game: [20, 30, 45, 60, 75]
        };

        let ctx = document.getElementById("skillChart");

        // destroy old graph
        if (chart) {
            chart.destroy();
        }

        chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["2020", "2021", "2022", "2023", "2024"],
                datasets: [{
                    label: "Skill Demand in India (%)",
                    data: demand[role],
                    borderWidth: 3,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true
            }
        });

    }, 1200);
}