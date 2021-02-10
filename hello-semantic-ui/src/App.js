import React from 'react';
import "semantic-ui-css/semantic.min.css"
import { Grid, Button, Container, Divider, Flag, Header, Image, Icon } from "semantic-ui-react";

function App() {
  return (
    <div>
      <Container textAlign="left">
      MAMP: Alternatif XAMPP untuk pengguna MacOS – Buat Kanca IT yang sedang belajar web development pasti tidak asing dengan localhost atau local server yang berjalan di PC / Laptop kita. Beberapa dari kanca IT mungkin sudah banyak mendengar software XAMPP. Ya, XAMPP adalah software untuk local server yang sudah umum digunakan, terutama pengguna windows. Pada dasarnya XAMMP bersifat cross-platform, yang artinya bisa digunakan di Windows, Linux dan MacOS.
      </Container>
      <br></br>
      <Container textAlign="right">
      MAMP: Alternatif XAMPP untuk pengguna MacOS – Buat Kanca IT yang sedang belajar web development pasti tidak asing dengan localhost atau local server yang berjalan di PC / Laptop kita. Beberapa dari kanca IT mungkin sudah banyak mendengar software XAMPP. Ya, XAMPP adalah software untuk local server yang sudah umum digunakan, terutama pengguna windows. Pada dasarnya XAMMP bersifat cross-platform, yang artinya bisa digunakan di Windows, Linux dan MacOS.
      </Container>
      <br></br>
      <Container textAlign="center">
      MAMP: Alternatif XAMPP untuk pengguna MacOS – Buat Kanca IT yang sedang belajar web development pasti tidak asing dengan localhost atau local server yang berjalan di PC / Laptop kita. Beberapa dari kanca IT mungkin sudah banyak mendengar software XAMPP. Ya, XAMPP adalah software untuk local server yang sudah umum digunakan, terutama pengguna windows. Pada dasarnya XAMMP bersifat cross-platform, yang artinya bisa digunakan di Windows, Linux dan MacOS.
      </Container>
      <br></br>
      <Container textAlign="justified">
      MAMP: Alternatif XAMPP untuk pengguna MacOS – Buat Kanca IT yang sedang belajar web development pasti tidak asing dengan localhost atau local server yang berjalan di PC / Laptop kita. Beberapa dari kanca IT mungkin sudah banyak mendengar software XAMPP. Ya, XAMPP adalah software untuk local server yang sudah umum digunakan, terutama pengguna windows. Pada dasarnya XAMMP bersifat cross-platform, yang artinya bisa digunakan di Windows, Linux dan MacOS.
      </Container>
      <Divider horizontal>Batas</Divider>
      <Divider horizontal>-</Divider>
      <br></br>
      <Grid container columns={3}>
        <Grid.Column>
          <Button primary>Sign Up</Button>
          <Button secondary>Sign In</Button>
          <Button basic color="green">Forgot Password</Button>
        </Grid.Column>
        <Grid.Column>
          <Flag name="id"></Flag>
          <Flag name="ps"></Flag>
        </Grid.Column>
        <Grid.Column>
          <Header as="h2" color="olive">
          <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png"></Image>
            Catur Hidayat</Header>
        </Grid.Column>
      </Grid>
      <Container textAlign="center">
        <Icon name="sync" loading size="large"></Icon>
      </Container>
      
    </div>
  );
}

export default App;
