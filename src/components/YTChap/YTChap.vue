<script>
import './YTChap.css'
</script>

<template>
  <div class="ytchap">
    <div class="container">
      <div class="video">
        <label for="images" class="select-file">
          Click To Select Video
          <input id="images" type="file" accept="image/*" />
        </label>
        <div class="control-btns">
          <button type="button">Start</button>
          <button type="button"><i class="fa-solid fa-play"></i></button>
          <button type="button"><i class="fa-solid fa-pause"></i></button>
        </div>
      </div>
      <div class="chapter-container">
        <h1>Chapters</h1>
        <div class="chapters-panel">
          <h3>00:00 - 10:00</h3> 
          <h3>10:00 - 20:00</h3> 
        </div>
      </div>
    </div>
  </div>
</template>

