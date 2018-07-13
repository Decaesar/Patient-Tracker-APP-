import Timeline from 'react-calendar-timeline/lib'
import React from "react"

import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

const groups = [{ id: 1, title: 'Patient id1' }, { id: 2, title: 'Patient id2' }]

const items = [
      {
        id: 1,
        group: 1,
        title: 'Name of the patient',
        start_time: moment(),
        end_time: moment().add(1, 'hour')
      },
      {
        id: 2,
        group: 2,
        title: 'Name of the patient',
        start_time: moment().add(-0.5, 'hour'),
        end_time: moment().add(0.5, 'hour')
      }

    ]

// const Patientschedule = props => (
//  <div className="patienttime">



export const Staffschedule = () => {
    return (
// ReactDOM.render(
  <div>
    Staff Schedule
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

export default Staffschedule;