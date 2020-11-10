import {Request, Response} from 'express'
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken';

class EmailConfirmationController{
  
    async sendConfirmUser(req:Request, res:Response):Promise<void>{
      let transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: 'noreplyonlineshopbot@gmail.com',
          pass: 'CxFUfusBweqT'
        },
      });
      let info = await transporter.sendMail({
        from: 'omarletonaf@gmail.com', // sender address
        to: req.body.email, // list of receivers
        subject: "<no-reply> Confirmacion de cuenta", // Subject line
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://bootswatch.com/4/journal/bootstrap.min.css">
            <script src="https://kit.fontawesome.com/efc1df0c4d.js" crossorigin="anonymous"></script>
            <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
            <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
        </head>
        <body>
            <h2>Confirmacion de cuenta</h2>
            <p>Recientemenete se vinculo su correo con una cuenta de OnlineShop, haga click en el link para confirmar su cuenta</p>
            <a class="btn btn-success" href=\"http://localhost:4200/confirmation/${req.body.idsystemuser}" >Si, yo solicite una cuenta</a>
        </body>
        </html>`,// html body
      });
      res.json({"messagge":"email send"});
    }

}

const emailConfirmationController = new EmailConfirmationController()
export default emailConfirmationController;