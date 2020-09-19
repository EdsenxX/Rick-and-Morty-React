//Dependencies
import React, { Component } from "react";
import Axios, { AxiosResponse } from "axios";
//assets
import styles from "./index.module.scss";
//Components
import CardCharacter from "@components/CardCharacter/CardCharacter";
import Pagination from "@components/Pagination/Pagination";

interface IProps {}

interface IState {
  characters?: [];
  totalPages?: [];
  currentPage?: number;
}

class Home extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      totalPages: [],
      currentPage: 1,
    };
  }

  componentDidMount = () => {
    this.extraerDatos(1);
  };

  extraerDatos = (page: number) => {
    this.setState({ currentPage: page });
    Axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`, {
      method: "GET",
    })
      .then((response: AxiosResponse) => {
        this.setState({
          ...this.state,
          characters: response.data.results,
          totalPages: response.data.info.pages,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changePage = (number: number) => {
    this.extraerDatos(number);
  };

  showPagination = () => (
    <Pagination
      totalPages={this.state.totalPages}
      changePage={this.changePage}
      currentPage={this.state.currentPage}
    />
  );

  render() {
    return (
      <div className={styles.home}>
        <div className={styles.home_header}>
          <img src="/images/logo.png" alt="logo" />
        </div>
        {this.showPagination()}
        <div className={styles.header_content}>
          <CardCharacter characters={this.state.characters} />
        </div>
        {this.showPagination()}
      </div>
    );
  }
}

export default Home;
