counter = document.getElementById("showCount");
count = 0;

function increase(){
    count++;
    counter.innerHTML = count;
}

function decrease(){
    count--;
    counter.innerHTML = count;
}

function clear(){
    count = 0;
    counter.innerHTML = count;
}