import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';


@Controller('mensajes')
export class MensajesController {
    @Post()
    create (@Body() createMensajeDto: CreateMensajeDto) {
        return 'Mensaje creado';
    }


    @Get()
    getAll() {
        return 'Devuelvo todos los mensajes';
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto) {
        return 'Mensaje actualizado';
    }

    @Delete(':id')
    delete() {
        return 'Mensaje eliminado';
    }


}
