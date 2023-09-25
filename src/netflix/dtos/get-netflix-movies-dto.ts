import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class GetNetFlixMoviesDTO {

    @IsNotEmpty({
        message:'Informe seu email'
    })
    @IsEmail(undefined,{
        message:'Informe um email válido'
    })
    readonly email: string
    
    @IsNotEmpty({
        message:'Informe sua senha'
    })
    @IsString({
        message:'Informe uma string'
    })
    readonly password: string

    @IsNotEmpty({
        message:'Informe o perfil'
    })
    @IsString({
        message:'Informe uma string'
    })
    readonly profile: string

}