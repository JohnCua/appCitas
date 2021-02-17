
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

//componentes
import Cita from './src/componentes/Cita';
import Formulario from './src/componentes/Formulario';


const App = () =>  {

  const [citas, setCitas] = useState([
    {id: "1", paciente: "Hook", propietario: "Juan", sintomas: "No come"},
    {id: "2", paciente: "Redux", propietario: "Carlos", sintomas: "No duerme"},
    {id: "3", paciente: "Native", propietario: "Jouse", sintomas: "No canta"}
  ]);

  const eliminarPaciente = id => {
    setCitas( (citasActuales) => {
      return citasActuales.filter( cita => cita.id !== id);
    } )
  }

  return (
    <View style={styles.contenedor}>

      <Text style={styles.titulo}>Administrador de citas</Text>

      <Formulario />

      <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas' : 'Agrega una cita'}</Text>

      <FlatList 
        data = { citas }
        renderItem = { ( {item} ) => <Cita cita={item} eliminarPaciente={eliminarPaciente}/> }
        keyExtractor = { cita => cita.id }
      />

    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex:1
  },
  titulo: {
    marginTop:40,
    marginBottom: 10,
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center',
    color: "#ffff"
  }

});

export default App;
