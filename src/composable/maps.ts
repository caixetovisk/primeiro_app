import { Geolocation } from '@capacitor/geolocation';

export function meuMapa(){
    const pegarCoordenadas = async () => {
        const coordinates = await Geolocation.getCurrentPosition();
        console.log('Current position:', coordinates);
    } ;
    return{
        pegarCoordenadas
    }
}