<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pagination</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="container">
      <h1 id="title" class="title" style="color: white; padding-bottom: 15px">
        Calculator
      </h1>
      <p
        id="description"
        class="description"
        style="color: white; padding-bottom: 15px"
      >
        Personal details will be rendered as per the Id clicked in the
        pagination
      </p>
      <div class="data">
        <div
          class="table-responsive"
          style="color: white; text-align: center; padding-top: 150px"
          ;
        >
          Please click on the desired Id below for their details
        </div>
      </div>
      <div class="pagination">
        <button class="btn3" onclick="prevSet() ">⇤</button>
        <button class="btn1" onclick="backBtn()">prev</button>
        <ul>
          <li class="link" value="1">1</li>
          <li class="link" value="2">2</li>
          <li class="link" value="3">3</li>
          <li class="link" value="4">4</li>
          <li class="link" value="5">5</li>
          <li class="link" value="6">6</li>
          <li class="link" value="7">7</li>
          <li class="link" value="8">8</li>
          <li class="link" value="9">9</li>
          <li class="link" value="10">10</li>
        </ul>
        <button class="btn2" onclick="nextBtn()">next</button>
        <button class="btn4" onclick="nextSet()">⇥</button>
      </div>
    </div>
    <script src="script.js"></script>
    <script src="https://app.zenclass.in/sheets/v1/js/zen/suite/bundle.js"></script>
  </body>
</html>
