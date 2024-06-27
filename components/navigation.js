const htmlFile = `
<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      font-family: "latin", sans-serif;
    }

    .sidenav {
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: #111;
      overflow-x: hidden;
      transition: 0.5s;
      padding-top: 60px;
    }

    .sidenav a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 15px;
      color: #818181;
      display: block;
      transition: 0.3s;
    }

    .sidenav a:hover {
      color: #f1f1f1;
    }

    .sidenav .closebtn {
      position: absolute;
      top: 0;
      right: 20px;
      font-size: 25px;
      margin-left: 30px;
    }

    @media screen and (max-height: 450px) {
      .sidenav {
        padding-top: 15px;
      }

      .sidenav a {
        font-size: 10px;
      }
    }
  </style>
</head>

<body>

  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="../adaptiveworks">Adaptive Works UI</a>
    <a href="../api/adaptiveworks">Adaptive Works API</a>
    <a href="../mongodb">Database Service UI</a>
    <a href="../api/mongodb">Database Service API</a>
    <a href="../api/sync">Sync DataSources</a>
    <a href="../snowflake">Snowflake Service UI</a>
    <a href="/">Dashboard</a>
    </div>

  
    <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>

  <script>
    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  </script>

</body>

</html>`

export default function navHtml () {

    return (
      <div dangerouslySetInnerHTML={{__html: htmlFile}} />
    )


}