
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';

//componentes
import Cita from './src/componentes/Cita';
import Formulario from './src/componentes/Formulario';


const App = () =>  {

  const [showForm, guardarshowForm] = useState(false);

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

  const showFormF = () => {
    guardarshowForm(!showForm);
  }


  return (
  
    <View style={styles.contenedor}>

      <Text style={styles.titulo}>Administrador de citas</Text>

      <View>
          <TouchableHighlight onPress = { () => showFormF()} style={styles.btnShowForm}>
              <Text style={styles.txtShowForm}>{ showForm ? 'Cancelar Crear Cita' : 'Crear Nueva Cita' }</Text>
          </TouchableHighlight>
      </View>

      <View style={styles.contenido}> 
      {
        showForm ? (
          <>
            <Text style={styles.titulo}>Crear Nueva Cita</Text>
            <Formulario 
            citas = { citas }
            setCitas = { setCitas }
            guardarshowForm = {guardarshowForm}/>
          </>
          
        ) : (
          <>
            <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas' : 'Agrega una cita'}</Text>

            <FlatList style = { styles.listado }
              data = { citas }
              renderItem = { ( {item} ) => <Cita cita={item} eliminarPaciente={eliminarPaciente}/> }
              keyExtractor = { cita => cita.id }
            />
          </>
        )
      }
      </View>

    </View>
  
    
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex:1
  },
  titulo: {
    marginTop:Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center',
    color: "#ffff"
  },
  contenido: {
    flex:1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnShowForm: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10
  },
  txtShowForm: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center'
  }

});

export default App;
