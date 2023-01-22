import React from 'react';
import './App.css';
import Announcement from './models/Announcement';
import { useEffect,useState}  from 'react'
import Repo from './repositories'

function App() {
  const [announcementList, setAnnouncementList] = useState<Announcement[]>([])

  const fetchannouncementList = async () => {
    const result = await Repo.announcements.getAll()
    if(result){
      setAnnouncementList(result)
    }
  }

  useEffect(() => {
    fetchannouncementList()
  })

  return (
    <div>
      {announcementList.map(announcement => (
        <div key={announcement.id}>
          <p>ID : {announcement.id}</p>
          <p>Description : {announcement.description}</p>
          <p>Positive : {announcement.remarkIfPositive}</p>
          <p>Negative : {announcement.remarkIfNegative}</p>
          <p>Time : {announcement.pubDateTime.toLocaleString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}</p>
          <p>UserCode : {announcement.userCode}</p>
        </div>
      ))}

      
    </div>

  );
}

export default App;



