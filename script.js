let upcount = document.getElementById("upcount")
let taskAssigned = document.getElementById("taskAssigned")
let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
let card4 = document.getElementById("card4")
let card5 = document.getElementById("card5")
let card6 = document.getElementById("card6")
let activity = document.getElementById("activity")
let clear = document.getElementById("clear")
let day = document.getElementById("day");
let dat = document.getElementById("dat");
let bg = document.getElementById("bgCol");
let theme = document.getElementById("theme");
let blog = document.getElementById("blog");
let taskcount = 6;

const now = new Date();
const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
});

card1.addEventListener("click", function (e) {
    card1.classList.add("opacity-20", "cursor-not-allowed");
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
    const node = document.createElement("div");
    node.classList.add("rounded-xl", "border", "border-slate-100", "pill-bg", "p-4", "text-sm", "text-slate-700");
    const p = document.createElement("p");
    p.innerText = `You have Complete The Task ${e.target.value} at ${formattedTime}`
    node.appendChild(p)
    activity.appendChild(node)
    upcount.innerText = parseInt(upcount.innerText) + 1;
    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;
    taskcount -= 1;
    card1.setAttribute("disabled", "true");
    alert("Board Updated Successfully");
    if (taskcount == 0) {
        alert("Congrates! You have completed all the current task");
    }
})

card2.addEventListener("click", function (e) {
    card2.classList.add("opacity-20", "cursor-not-allowed");
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
    const node = document.createElement("div");
    node.classList.add("rounded-xl", "border", "border-slate-100", "pill-bg", "p-4", "text-sm", "text-slate-700");
    const p = document.createElement("p");
    p.innerText = `You have Complete The Task ${e.target.value} at ${formattedTime}`
    node.appendChild(p)
    activity.appendChild(node)
    upcount.innerText = parseInt(upcount.innerText) + 1;
    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;
    taskcount--;
    card2.setAttribute("disabled", "true");
    alert("Board Updated Successfully");
    if (taskcount == 0) {
        alert("Congrates! You have completed all the current task");
    }
})

card3.addEventListener("click", function (e) {
    card3.classList.add("opacity-20", "cursor-not-allowed");
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
    const node = document.createElement("div");
    node.classList.add("rounded-xl", "border", "border-slate-100", "pill-bg", "p-4", "text-sm", "text-slate-700");
    const p = document.createElement("p");
    p.innerText = `You have Complete The Task ${e.target.value} at ${formattedTime}`
    node.appendChild(p)
    activity.appendChild(node)
    upcount.innerText = parseInt(upcount.innerText) + 1;
    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;
    taskcount--;
    card3.setAttribute("disabled", "true");
    alert("Board Updated Successfully");
    if (taskcount == 0) {
        alert("Congrates! You have completed all the current task");
    }
})

card4.addEventListener("click", function (e) {
    card4.classList.add("opacity-20", "cursor-not-allowed");
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
    const node = document.createElement("div");
    node.classList.add("rounded-xl", "border", "border-slate-100", "pill-bg", "p-4", "text-sm", "text-slate-700");
    const p = document.createElement("p");
    p.innerText = `You have Complete The Task ${e.target.value} at ${formattedTime}`
    node.appendChild(p)
    activity.appendChild(node)
    upcount.innerText = parseInt(upcount.innerText) + 1;
    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;
    taskcount--;
    card4.setAttribute("disabled", "true");
    alert("Board Updated Successfully");
    if (taskcount == 0) {
        alert("Congrates! You have completed all the current task");
    }
})

card5.addEventListener("click", function (e) {
    card5.classList.add("opacity-20", "cursor-not-allowed");
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
    const node = document.createElement("div");
    node.classList.add("rounded-xl", "border", "border-slate-100", "pill-bg", "p-4", "text-sm", "text-slate-700");
    const p = document.createElement("p");
    p.innerText = `You have Complete The Task ${e.target.value} at ${formattedTime}`
    node.appendChild(p)
    activity.appendChild(node)
    upcount.innerText = parseInt(upcount.innerText) + 1;
    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;
    taskcount--;
    card5.setAttribute("disabled", "true");
    alert("Board Updated Successfully");
    if (taskcount == 0) {
        alert("Congrates! You have completed all the current task");
    }
})

card6.addEventListener("click", function (e) {
    card6.classList.add("opacity-20", "cursor-not-allowed");
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
    const node = document.createElement("div");
    node.classList.add("rounded-xl", "border", "border-slate-100", "pill-bg", "p-4", "text-sm", "text-slate-700");
    const p = document.createElement("p");
    p.innerText = `You have Complete The Task ${e.target.value} at ${formattedTime}`
    node.appendChild(p)
    activity.appendChild(node)
    upcount.innerText = parseInt(upcount.innerText) + 1;
    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;
    taskcount--;
    card6.setAttribute("disabled", "true");
    alert("Board Updated Successfully");
    if (taskcount == 0) {
        alert("Congrates! You have completed all the current task");
    }
})



clear.addEventListener("click", function () {
    activity.innerHTML = "";
})


const options1 = {
    weekday: "short",
};

const options2 = {
    month: "short",    // Jul
    day: "2-digit",    // 28
    year: "numeric"    // 2025
};

const formattedDate1 = now.toLocaleDateString("en-US", options1);
const formattedDate2 = now.toLocaleDateString("en-US", options2);
day.innerText = formattedDate1 + " ,";
dat.innerText = formattedDate2.replace(/,/g, "");
let letters = "0123456789ABCDEF";
let color = "#";

theme.addEventListener("click", function () {
    color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[(Math.floor(Math.random() * 16))];
    }
    bg.style.backgroundColor = color;
})

blog.addEventListener("click", function(){
    window.location.href = "./blog.html";
})





