const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Promt to select media stream, pass to vedio Element, then paly

async function selectMediaStream() {
  try {
    // Screen capture code
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();

    // assign screen capture to the video element
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log('Error here : ', error);
  }
}

button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;

  //   Start Picture in Picture
  await videoElement.requestPictureInPicture();

  button.disabled = false;
});

// On load
selectMediaStream();
