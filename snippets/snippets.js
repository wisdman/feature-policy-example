

const video = document.querySelector("video")
video.play()

const audio = document.querySelector("audio")
audio.play()


const audioContext = new AudioContext()
const source = audioContext.createBufferSource()
source.start(0)


// Feature-Policy: camera ...
navigator.mediaDevices.getUserMedia({ video:true })

// Feature-Policy: microphone ...
navigator.mediaDevices.getUserMedia({ audio: true })


navigator.mediaDevices.getUserMedia({ video:true,
                                      audio: true })


navigator.geolocation.watchPosition(/* ... */)
navigator.geolocation.getCurrentPosition(/* ... */)


navigator.geolocation.getCurrentPosition((position, error) => {
  if (error) {
    console.log("ERROR")
    return
  }

  console.log("SUCCESS")
})



new AbsoluteOrientationSensor()  // accelerometer, gyroscope, magnetometer
new Accelerometer()              // accelerometer
new AmbientLightSensor()         // ambient-light-sensor
new GravitySensor()              // accelerometer
new Gyroscope()                  // gyroscope
new LinearAccelerationSensor()   // accelerometer
new Magnetometer()               // magnetometer
new RelativeOrientationSensor()  // accelerometer, gyroscope

// accelerometer, gyroscope
window.ondeviceorientation = event => { /* ... */ }
window.addEventListener("deviceorientation", event => { /* ... */ })

// accelerometer, gyroscope, magnetometer
window.ondeviceorientationabsolute = event => { /* ... */ }
window.addEventListener("deviceorientationabsolute", event => { /* ... */ })

// accelerometer, gyroscope
window.ondevicemotion = event => { /* ... */ }
window.addEventListener("devicemotion", event => { /* ... */ })

// magnetometer
window.oncompassneedscalibration = event => { /* ... */ }
window.addEventListener("compassneedscalibration", event => { /* ... */ })


navigator.requestMIDIAccess()



new PaymentRequest(/* ... */)


try {
  paymentRequest = new PaymentRequest(/* ... */)
} catch(error) {
  console.log("ERROR")
}


navigator.usb.getDevices()


navigator.getVRDisplays()


navigator.requestMediaKeySystemAccess(/* ... */)



mainNode.webkitRequestFullscreen()
document.addEventListener("webkitfullscreenerror", event => { /* ... */ })

mainNode.mozRequestFullScreen()
document.addEventListener("onmozfullscreenerror", event => { /* ... */ })


const video = document.querySelector("video")
video.requestPictureInPicture()


document.pictureInPictureEnabled



/* JS animate left */
let x = 0, d = 1
void function animate() {
  boxNode.style.left = `${x += d}px`
  if (x >= 200) { d = -1 }
  else if (x <= 0 ) { d = 1}
  window.requestAnimationFrame(animate)
}()


// Максимально допустимое превышение
const max_oversize_ratio = 2

// Соотношение логических пикселей к реальным для данного устройства
const device_pixel_ratio = window.devicePixelRatio

if (
  image_width / (max_oversize_ratio * device_pixel_ratio) > container_width
||image_height / (max_oversize_ratio * device_pixel_ratio) > container_height
) {
  /* image size is too big */
  /* set placeholder */
} else {
  /* image size is normal */
  /* show image */
}


1280 / (2 * 2) > 178  =  320 > 178
720 / (2 * 2) > 100  =  180 > 100



if ( (image_file_size_bytes - 1024) / (image_width * image_height) > 0.5 ) {
  /* image file size is too big */
  /* set placeholder */
} else {
  /* image file size is normal */
  /* show image */
}



(68975 - 1024) / (267*150) > 0.5  =  1.7 > 0.5 /* PNG */
(6144 - 1024) / (267*150) > 0.5  =  0.13 > 0.5 /* WEBP */



300 x 150


const xhr = new XMLHttpRequest()
xhr.open("GET", "sync.html", false) // Sync
xhr.send()


document.domain


document.write('<p class="success">document.write successful</p>')


navigator.getWakeLock(/* type */)



const policy = document.featurePolicy

policy.allowsFeature("usb")

policy.allowsFeature("usb", "https://example.com")

policy.getAllowlistForFeature("payment")

policy.allowedFeatures()



Report-To: {
  "max_age": 86400,
  "endpoints": [{
    "url": "https://reportingapi.io/api"
  }]
}


{
 "type": "feature-policy-violation",
 "url": "https://demo.ajaw.it/feature-policy-example/",
 "age": 60000,
 "user_agent": "Mozilla/1.22 (compatible; MSIE 2.0; Windows 95)",
 "body": {
    "featureId": "geolocation",
    "message": "Geolocation access has been blocked.",
    "source_file": "https://demo.ajaw.it/feature-policy-example/index.html",
    "line_number": 20,
    "column_number": 37,
    "disposition": "enforce"
  }
}


const observer new ReportingObserver(reportList => {
  reportList.forEach(report => {
    console.log(report)
  })
}, {"types": ["feature-policy-violation"]})

observer.observe()
