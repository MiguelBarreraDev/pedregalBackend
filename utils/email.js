const { models } = require('../libs/sequelize')

const template = async (body) => {
  const tipoDeReporte = await models.Tipos.findByPk(body.tiposId)
  const persons = ({persons}) => {
    if (typeof persons === 'object') {

      for (let i = 0; i < persons.length; i++) {

      }
    } else {
      console.log('soy un simple string')
      // const person = JSON.parse(completeData.persons)

    }
  }
  persons(body)
  return (
  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body{
      background-color: white;
    }
    .header{
      width: 100%;
      height: 100px;
      padding: 10px 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .logo{
      width: 50%;
    }
    h2{
      width: 50%;
    }
    h1{
      padding: 10px 15px;
    }
    .container{
      width: 80%;
      margin: 0 auto;
      border: solid 1px black;
    }
    .logo{
      width: 70px;
      height: 70px;
      border-radius: 50%;
      color: white;
      text-align: center;
      background-color: red;
      padding-top: 25px;

    }
    .row{
      display: flex;
    }
    h3{
      width: 50%;
      padding: 15px;
    }
    .content{
      width: 50%;
      padding: 15px;
    }
    footer{
      width: 100%;
      height: 70px;
      background-color: black;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">pedregal</div>
      <h2>Nº Reporte: 8888</h2>
    </div>
    <main>
      <h1>Informacion</h1>
      <hr />
      <div class="row">
        <h3>Tipo de reporte</h3>
        <div class="content">
          <p>${tipoDeReporte.dataValues.name}</p>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>Identificacion de personas involucradas</h3>
        <div class="content">

          <p>persona 1 </p>
          <p>persona 2</p>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>Identificacion del lugar del suceso</h3>
        <div class="content">
          <p>lugar 1 </p>
          <p>lugar 2</p>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>Fecha del suceso</h3>
        <div class="content">
          <p>Fecha 1 </p>
          <p>Fecha 2</p>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>Descripcion del suceso</h3>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatibus, iste aliquid reprehenderit velit autem magnam mollitia? Maiores est sapiente distinctio, tenetur, excepturi, cumque provident voluptate odit blanditiis consectetur debitis. </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>INFORMACIÓN ADICIONAL DEL REPORTE (OPCIONAL)</h3>
      </div>
      <hr />
      <div class="row">
        <h3>¿Cómo tuvo conocimiento de los sucesos reportados?</h3>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint nobis eum sunt rem quod ducimus iure nulla, ut fuga accusantium temporibus? Quos deserunt corrupti explicabo, odit excepturi est accusantium. </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>¿Este suceso está relacionado a personas externas a la compañía?</h3>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint nobis eum sunt rem quod ducimus iure nulla, ut fuga accusantium temporibus? Quos deserunt corrupti explicabo, odit excepturi est accusantium. </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>A su parecer ¿Cree que se ocultan los hechos de alguna forma?</h3>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint nobis eum sunt rem quod ducimus iure nulla, ut fuga accusantium temporibus? Quos deserunt corrupti explicabo, odit excepturi est accusantium. </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>Aparte de Ud. ¿Algún personal de la empresa conoce el suceso reportado?</h3>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint nobis eum sunt rem quod ducimus iure nulla, ut fuga accusantium temporibus? Quos deserunt corrupti explicabo, odit excepturi est accusantium. </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>¿Qué relación existe entre el personal involucrado en el suceso reportado?</h3>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint nobis eum sunt rem quod ducimus iure nulla, ut fuga accusantium temporibus? Quos deserunt corrupti explicabo, odit excepturi est accusantium. </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>¿Cómo se benefician las personas en el hecho reportado?</h3>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint nobis eum sunt rem quod ducimus iure nulla, ut fuga accusantium temporibus? Quos deserunt corrupti explicabo, odit excepturi est accusantium. </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>¿Conoce a otros testigos que pueden apoyar su versión y contribuir con evidencia del caso?</h3>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint nobis eum sunt rem quod ducimus iure nulla, ut fuga accusantium temporibus? Quos deserunt corrupti explicabo, odit excepturi est accusantium. </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>OPCIONES DE CONTACTO</h3>
      </div>
      <hr />
      <div class="row">
        <h3>¿Cuál es su relación con la empresa?</h3>
        <div class="content">
          <p>Lorem ipsum dolo rem quod ducimus cor accusantium. </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>Email</h3>
        <div class="content">
          <p>email@hotmail.com </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>Telefono</h3>
        <div class="content">
          <p>+51 989990345 </p>
        </div>
      </div>
      <hr />


    </main>
    <footer>
      soy el footer
    </footer>
    <script src="../routes/report.router.js">

      console.log(body)


    </script>
  </div>
</body>
</html>
  `
)
}

module.exports = template
