<script>
import './YTChap.css'
</script>

<template>
  <div class="ytchap">
    <div class="container">
      <div class="video">
        <label for="images" class="select-file">
          Click To Select
          <input id="images" type="file" accept="image/*" />
        </label>
        <div class="control-btns">
          <button type="button">Start</button>
          <button type="button">Pouse</button>
          <button type="button">Break Point</button>
        </div>
      </div>
      <div class="chapter-container">
        <h1>Chapter</h1>
        <div class="video-chapters">
          <h3>00:00 - 10:00</h3> 
          <h3>00:00 - 10:00</h3> 
        </div>
      </div>
    </div>
  </div>
</template>

