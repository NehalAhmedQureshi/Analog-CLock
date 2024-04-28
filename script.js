function showTime() {


// let hours = document.querySelector('#hours')
      // let minutes = document.querySelector('#minutes')
      // let seconds = document.querySelector('#hours')
      

      time = new Date()
      htime = time.getHours();
      htime = time > 12 ? htime - 12 : htime
      mtime = time.getMinutes();
      stime = time.getSeconds();
      hrotation = 30 * htime + mtime / 2;
      mrotation = 6 * mtime
      srotation = 6 * stime
      
      hours.style.transform = `rotate(${hrotation}deg)`
      minutes.style.transform = `rotate(${mrotation}deg)`
      seconds.style.transform = `rotate(${srotation}deg)`
      
      setTimeout(showTime, 1000)
      

}
showTime()