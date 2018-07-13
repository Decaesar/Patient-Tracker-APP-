import Timeline from 'react-calendar-timeline/lib'
import React from "react"

import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import './Patientschedule.css'


const groups = [{ id: 1, title: 'Patient Name' }]

const items = [
      {
        id: 1,
        group: 1,
        title: 'X Ray',
        start_time: moment(),
        end_time: moment().add(1, 'hour')
      },
      {
        id: 2,
        group: 1,
        title: 'Blood Samples',
        start_time: moment().add(1, 'hour'),
        end_time: moment().add(1.5, 'hour')
      },
      {
        id: 3,
        group: 1,
        title: 'Phys Therapy',
        start_time: moment().add(2, 'hour'),
        end_time: moment().add(2.5, 'hour')
      },

    ]

// const Patientschedule = props => (
//  <div className="patienttime">


export const Patientschedule = () => {
    return (
// ReactDOM.render(
  <div className="Patientschedule">
    Patient Schedule
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
    />
  </div>);
};
// </div>
// );
//   document.getElementById('root')

export default Patientschedule;