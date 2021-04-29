setInterval(() => {
    d = new Date();
    htime=d.getHours();    
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation= 30*htime+mtime/2; //we get this after do calculation
    mrotation= 6*mtime;//we get this after do calculation
    srotation= 6*stime;//we get this after do calculation

    hour.style.transform=`rotate(${hrotation}deg)`;
     minute.style.transform=`rotate(${mrotation}deg)`;
     second.style.transform=`rotate(${srotation}deg)`;
}, 1000);

// 