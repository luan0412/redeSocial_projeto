import React from 'react';
import '../css/Cadastro.css';
import Videofull from '../source/videofull.mp4';
import Header from '../components/começoFim/Header';
import Footer from '../components/começoFim/Footer';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import axios from 'axios';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const  schema = yup.object().shape({
    email: yup.string().email('O campo e-mail é inválido')
    .required('O campo e-mail é obrigatório'),
    senha: yup.string().required('O campo senha é obrigatório'),
    nome: yup.string().required('O campo nome é obrigatório'),
    sobrenome: yup.string().required('O campo sobrenome é obrigatório'),
    dataDia: yup.string().required('Campo Dia esta vazio'),
    dataMes: yup.string().required('Campo mês esta vazio'),
    dataAno: yup.string().required('Campo Ano esta vazio'),
    genero: yup.string().nullable().required('O campo Gênero é obrigatório')
    
  });

function Cadastro() {

    const { register, handleSubmit,formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });

      let history = useHistory();
    
      const handleCadastro = data => axios.post("https://start-cadastro.herokuapp.com/create", data)
      .then(() => {
        history.push("/Login")
      }).catch(() => {
          console.log('nao foi')
      });


    return(
        <>
        <Header />
        <div className="Cadastre">
        <title>Cadastro</title>
            <div className="container">
                <video id="fundo" src={Videofull} autoPlay loop muted type="video/mp4" />
                <div className="video">
                </div>
                <div className="cadastro">
                    <form autocomplete="off" id="form" onSubmit={handleSubmit(handleCadastro)}>
                        <h1>Nova Conta</h1>
                        <fieldset>
                            <input type="text" name="nome" placeholder="Nome" id="nome" {...register('nome') } />
                            <span>{errors.nome?.message}</span>
                        </fieldset>
                        <fieldset>    
                            <input type="text" name="sobrenome" placeholder="Sobrenome" id="sobrenome" {...register('sobrenome') } />
                            <span>{errors.sobrenome?.message}</span>
                        </fieldset>
                        <fieldset>
                            <input type="email" name="email" placeholder="Email" id="email" {...register('email') } />
                            <span>{errors.email?.message}</span>
                        </fieldset>
                        <fieldset>
                            <input type="password" name="senha" placeholder="Senha" id="senha" {...register('senha') } />
                            <span>{errors.senha?.message}</span>
                        </fieldset>
                        
                        <h2>Data de Nascimento:</h2>
                        <fieldset>
                            <div className="field_flex">
                            <select id="data_dia" name="dataDia"  {...register('dataDia')}>
                                <option value="" id="dia">Dia</option>
                                <option value="1">2</option>
                                <option value="2">1</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>

                            <select id="data_mes" name="dataMes"  {...register('dataMes')}>
                                <option value="">Mês</option>
                                <option value="Jan">Jan</option>
                                <option value="Fev">Fev</option>
                                <option value="Mar">Mar</option>
                                <option value="Abr">Abr</option>
                                <option value="Mai">Mai</option>
                                <option value="Jun">Jun</option>
                                <option value="Jul">Jul</option>
                                <option value="Ago">Ago</option>
                                <option value="Set">Set</option>
                                <option value="Out">Out</option>
                                <option value="Nov">Nov</option>
                                <option value="Dez">Dez</option>
                            </select>
            
                            <select id="data_ano" name="dataAno"  {...register('dataAno')}>
                                <option value="">Ano</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989">1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                                <option value="1984">1984</option>
                                <option value="1983">1983</option>
                                <option value="1982">1982</option>
                                <option value="1981">1981</option>
                                <option value="1980">1980</option>
                                <option value="1979">1979</option>
                                <option value="1978">1978</option>
                                <option value="1977">1977</option>
                                <option value="1976">1976</option>
                                <option value="1975">1975</option>
                                <option value="1974">1974</option>
                                <option value="1973">1973</option>
                                <option value="1972">1972</option>
                                <option value="1971">1971</option>
                                <option value="1970">1970</option>
                                <option value="1969">1969</option>
                                <option value="1968">1968</option>
                                <option value="1967">1967</option>
                                <option value="1966">1966</option>
                                <option value="1965">1965</option>
                                <option value="1964">1964</option>
                                <option value="1963">1963</option>
                                <option value="1962">1962</option>
                                <option value="1961">1961</option>
                                <option value="1960">1960</option>
                                <option value="1959">1959</option>
                                <option value="1958">1958</option>
                                <option value="1957">1957</option>
                                <option value="1956">1956</option>
                                <option value="1955">1955</option>
                                <option value="1954">1954</option>
                                <option value="1953">1953</option>
                                <option value="1952">1952</option>
                                <option value="1951">1951</option>
                                <option value="1950">1950</option>
                                <option value="1949">1949</option>
                                <option value="1948">1948</option>
                                <option value="1947">1947</option>
                                <option value="1946">1946</option>
                                <option value="1945">1945</option>
                                <option value="1944">1944</option>
                                <option value="1943">1943</option>
                                <option value="1942">1942</option>
                                <option value="1941">1941</option>
                                <option value="1940">1940</option>
                                <option value="1939">1939</option>
                                <option value="1938">1938</option>
                                <option value="1937">1937</option>
                                <option value="1936">1936</option>
                                <option value="1935">1935</option>
                                <option value="1934">1934</option>
                                <option value="1933">1933</option>
                                <option value="1932">1932</option>
                                <option value="1931">1931</option>
                                <option value="1930">1930</option>
                                <option value="1929">1929</option>
                                <option value="1928">1928</option>
                                <option value="1927">1927</option>
                                <option value="1926">1926</option>
                                <option value="1925">1925</option>
                                <option value="1924">1924</option>
                                <option value="1923">1923</option>
                                <option value="1922">1922</option>
                                <option value="1921">1921</option>
                                <option value="1920">1920</option>
                                <option value="1919">1919</option>
                                <option value="1918">1918</option>
                                <option value="1917">1917</option>
                                <option value="1916">1916</option>
                                <option value="1915">1915</option>
                                <option value="1914">1914</option>
                                <option value="1913">1913</option>
                                <option value="1912">1912</option>
                                <option value="1911">1911</option>
                                <option value="1910">1910</option>
                                <option value="1909">1909</option>
                                <option value="1908">1908</option>
                                <option value="1907">1907</option>
                                <option value="1906">1906</option>
                                <option value="1905">1905</option>
                            </select>
                            </div>
                            <div className="span_flex">
                                <span>{errors.dataDia?.message}</span>
                                <span>{errors.dataMes?.message}</span>
                                <span>{errors.dataAno?.message}</span>
                            </div>
                            
                        </fieldset>

                        <h2>Gênero:</h2>
                        <fieldset>
                            <div className="field_flex">
                            <label  for="feminino">Feminino<input type="radio" name="genero" id="feminino" value="F eminino" {...register('genero') } /></label>
                            <label  for="masculino">Masculino<input type="radio" name="genero" id="masculino"  value="Masculino" {...register('genero') } /></label>
                            <label  for="neutro">Outros<input type="radio" name="genero" id="neutro" value="Outros" {...register('genero') } /></label>
                            </div>
                            <span>{errors.genero?.message}</span>
                        </fieldset>
                            
                        <fieldset className="field_flex">
                            <button type="submit" id="botao">Nova Conta</button>
                        </fieldset>
                            
                        
                        <div id="link">
                            <button id="botao" type="submit" onClick={() => history.push("/Login")} >Login</button>
                        </div>
                       
                    </form>
                </div>
            </div>
        
  
        </div>
        <Footer />
        </>
        
    );
}

export default Cadastro

    