import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';


@Controller('mensajes')
export class MensajesController {
    @Post()
    create (@Body() CreateMensajeDto: CreateMensajeDto) {
        return "Mensaje creado";
    }


    @get()
    getAll() {
        return "Devuelvo todos los mensajes"
    }


}
