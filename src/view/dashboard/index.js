import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            chartData :{
                labels: [ 'BigHEre','M4','blood', 'Maicom', 'Matheus','ciboGÃO', 'shadow', 'Felipe'],
                datasets: [{
                    label: 'ESTRAGOU PARTIDA FEEDANDO',
                    data: [500, 1000, 1500, 2000, 3500, 1000, 1500, 10000],
                backgroundColor:[
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                ]
                }]
            }
        }
    }

    render() {
        return (
            <div>
                <Bar
                    data={this.state.chartData}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }

}
export default Dashboard;