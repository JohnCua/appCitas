
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableHighlight,
  Alert,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';


const Formulario = ({citas, setCitas, guardarshowForm}) => {

    // constantes para guardar datos 

    const [fecha, guardarFecha]  = useState('');
    const [hora,  guardarHora]   = useState('');

    const [paciente,    guardarPaciente]       = useState(''); 
    const [propietario, guardarPropietario]    = useState(''); 
    const [telefono,    guardarTelefono]       = useState(''); 
    const [sintomas,    guardarSintomas]       = useState(''); 

    //constantes para datePicker y sus funciones

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const confirmarFecha = (date) => {
      const opciones = { year: 'numeric', month: 'long', day: '2-digit' };
      guardarFecha(date.toLocaleDateString('es-ES',opciones));
      hideDatePicker();
    };

    // muestra u oculta el time piker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };


    const confirmarHora = (hora) => {
        const opciones = { hour: 'numeric', minute: '2-digit' }; // opciones = { hour: 'numeric', minute: '2-digit' };
        guardarHora(hora.toLocaleTimeString('en-US',opciones));
        hideTimePicker();
      };

    // funcion para crear una nueva cita

    const crearCita = () => {

        // validar
        if( paciente.trim() === '' || 
        propietario.trim() === '' || 
        telefono.trim() === '' || 
        sintomas.trim() === '' || 
        fecha.trim() === '' || 
        hora.trim() === '') {
            // Falta la validacion
            mostrarAlerta();
            return;
        }

        // crear una nueva cita

        const cita = { paciente, propietario, telefono, fecha, hora, sintomas };

        cita.id = shortid.generate();

        // agregar al state

        const citasNuevos = [...citas, cita];

        setCitas(citasNuevos);

        // ocultar el formulario
        guardarshowForm(false);


    }

    // funcion para mostrar alerta

    const mostrarAlerta = () => {
        Alert.alert(
            'Error', // Titulo
            'Todos los campos son obligatorios', //mensaje
            [{
                text: 'OK' // Arreglo de botones
            }]
        );
    }


  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }



    return (
      //TouchableWithoutFeedback sirve para cerrar el teclado cuando el usuario toque otra parte de la pantalla
      <TouchableWithoutFeedback onPress= { () => cerrarTeclado()}>  
       <ScrollView style={ styles.formulario }>
           <View>
                <Text style={ styles.label }>Paciente:</Text>
                <TextInput style={ styles.input } 
                onChangeText ={ (text) => {
                    guardarPaciente(text);
                } }
                />
           </View>

           <View>
                <Text style={ styles.label }>Dueño:</Text>
                <TextInput style={ styles.input } 
                onChangeText ={ (text) => {
                    guardarPropietario(text);
                } }
                />
           </View>


           <View>
                <Text style={ styles.label }>Contacto:</Text>
                <TextInput style={ styles.input } 
                onChangeText ={ (text) => {
                    guardarTelefono(text);
                } }
                keyboardType='numeric'
                />
           </View>

           <View>
                <Text style={ styles.label }>Fecha:</Text>
                <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmarFecha}
                    onCancel={hideDatePicker}
                    locale='es_ES'
                />
                <Text> {fecha}</Text>
            </View>

            <View>
                <Text style={ styles.label }>Hora:</Text>
                <Button title="Seleccionar Hora" onPress={showTimePicker} />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmarHora}
                    onCancel={hideTimePicker}
                    locale='es_ES'
                />
                <Text>{hora}</Text>
            </View>

           <View>
                <Text style={ styles.label }>Sintomas:</Text>
                <TextInput style={ styles.input } 
                multiline
                onChangeText ={ (text) => {
                    guardarSintomas(text);
                } }
                />
           </View>

           <View>
                <TouchableHighlight onPress = { () => crearCita()} style={styles.btnSubmit}>
                    <Text style={styles.txtSubmit}>Guardar &times;</Text>
                </TouchableHighlight>
           </View>

          
          
       </ScrollView>

       </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 18,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10
    },
    txtSubmit: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Formulario;