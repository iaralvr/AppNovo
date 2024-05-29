import { Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Inserir() {

  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState(false);

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');

  async function Cadastro()
  {
    await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
                email:email,
                username:usuario,
                password: senha,
                name:{
                    firstname:nome,
                    lastname:sobrenome
                },
                address:{
                    city:cidade,
                    street:rua,
                    number:numero,
                    zipcode:cep,
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:telefone
            })
      })
      .then( res => ( res.ok == true ) ? res.json() : false )
      .then( json => {
        setSucesso((json.id) ? true : false)
        setErro((json.id) ? false : true)
        } )
      .catch( err => setErro( true ) )
  }
  

  return (
    <ScrollView contentContainerStyle={css.container}>
      {sucesso ?
        <Text>Seu cadastro foi realizado!</Text>
        :
        <>
          <TextInput style={css.input} placeholder='Nome' TextInput={nome} onChangeText={(digitado) => setNome(digitado)}></TextInput>
          <TextInput style={css.input} placeholder='Sobrenome' TextInput={sobrenome} onChangeText={(digitado) => setSobrenome(digitado)}></TextInput>
          <TextInput style={css.input} placeholder='E-mail' TextInput={email} onChangeText={(digitado) => setEmail(digitado)}></TextInput>
          <TextInput style={css.input} placeholder='Usuário' TextInput={usuario} onChangeText={(digitado) => setUsuario(digitado)}></TextInput>
          <TextInput style={css.input} placeholder='Senha' TextInput={senha} keyboardType="numeric" onChangeText={(digitado) => setSenha(digitado)}></TextInput>
          <TextInput style={css.input} placeholder='Rua' TextInput={rua} onChangeText={(digitado) => setRua(digitado)}></TextInput>
          <TextInput style={css.input} placeholder='Número da Casa' keyboardType="numeric" TextInput={numero} onChangeText={(digitado) => setNumero(digitado)}></TextInput>
          <TextInput style={css.input} placeholder='Cidade' TextInput={cidade} onChangeText={(digitado) => setCidade(digitado)}></TextInput>
          <TextInput style={css.input} placeholder='CEP' TextInput={cep} keyboardType="numeric" onChangeText={(digitado) => setCep(digitado)}></TextInput>
          <TextInput style={css.input} placeholder='Telefone' TextInput={telefone} keyboardType="numeric" onChangeText={(digitado) => setTelefone(digitado)}></TextInput>
          <TouchableOpacity style={css.btn} onPress={Cadastro}>
            <Text style={css.btnText}>CADASTRAR</Text>
          </TouchableOpacity>
          {erro && <Text>Confire os campos e tente novamente.</Text>}
        </>
      }
    </ScrollView>
  )
}

const css = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '"#c7e5'
  },
  input: {
    color: '#877D73',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 13,
    padding: 12,
    marginVertical: 8,
    fontSize: 16,
    width: '94%',
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  btnText:{
    backgroundColor:"#c7e5",
    textAlign:"center",
    width:"100%",
    height:"15%"
  }
})