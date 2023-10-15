import React from 'react'
import Button from 'react-bootstrap/Button';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import MainLayout from './components/Layout/MainLayout';
import Performance from './components/Performance/Performance';
import CardMenu from './components/CardMenu/CardMenu';
import DocumentCard from './components/DocumentCard/DocumentCard';

const App = () => {
  return (
    <div>
      <Header />
      <MainLayout>
        <Dashboard />
        <Performance />
        <CardMenu />
        <DocumentCard />
      </MainLayout>

    </div>
  )
}

export default App