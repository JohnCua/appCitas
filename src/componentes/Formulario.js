import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";



const Formulario = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const confirmarFecha = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };

    // muestra u oculta el time piker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };


    const confirmarHora = (date) => {
        console.warn("A date has been picked: ", date);
        hideTimePicker();
      };

    return (
       <View style={ styles.formulario }>
           <View>
                <Text style={ styles.label }>Paciente:</Text>
                <TextInput style={ styles.input } 
                onChangeText ={ (text) => {
                    console.log(text);
                } }
                />
           </View>

           <View>
                <Text style={ styles.label }>Dueño:</Text>
                <TextInput style={ styles.input } 
                onChangeText ={ (text) => {
                    console.log(text);
                } }
                />
           </View>


           <View>
                <Text style={ styles.label }>Contacto:</Text>
                <TextInput style={ styles.input } 
                onChangeText ={ (text) => {
                    console.log(text);
                } }
                keyboardType='numeric'
                />
           </View>

           <View>
                <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmarFecha}
                    onCancel={hideDatePicker}
                    locale='es_ES'
                />
            </View>

            <View>
                <Button title="Seleccionar Hora" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmarHora}
                    onCancel={hideTimePicker}
                    locale='es_ES'
                    
                />
            </View>

           <View>
                <Text style={ styles.label }>Sintomas:</Text>
                <TextInput style={ styles.input } 
                multiline
                onChangeText ={ (text) => {
                    console.log(text);
                } }
                />
           </View>

          
          
       </View>
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


    }
});

export default Formulario;