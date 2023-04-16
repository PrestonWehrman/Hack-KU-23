// Require google from googleapis package.
const { google } = require('googleapis')

// Require oAuth2 from our google instance.
const { OAuth2 } = google.auth

// Create a new instance of oAuth and set our Client ID & Client Secret.
const oAuth2Client = new OAuth2(
  '147087934507-l74sss2dmn1j15msljrcogm467r00sfi.apps.googleusercontent.com',
  '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'
)

// Call the setCredentials method on our oAuth2Client instance and set our refresh token.
oAuth2Client.setCredentials({
  refresh_token: '1//04TVLIDLo5TO3CgYIARAAGAQSNwF-L9Iruh_RAG4l0C_eUqTkqiiEjDAiZx2v2RIYBZwJ6ZS6E9Oh7XgXsoD3Ryykym14hjZnveE',
})

// Create a new calender instance.
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

// Create a new event start date instance for temp uses in our calendar.
const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay())

// Create a new event end date instance for temp uses in our calendar.
const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay())
eventEndTime.setMinutes(eventEndTime.getMinutes())

// Create a dummy event for temp uses in our calendar
const event = {
  summary: `Meeting with Cade`,
  location: `Room LEEP2 1320`,
  description: `Gotta do some stuffs.`,
  colorId: 1,
  start: {
    dateTime: eventStartTime,
    timeZone: 'America/Denver',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'America/Denver',
  },
}

// Check if we a busy and have an event on our calendar for the same time.
calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'America/Denver',
      items: [{ id: 'primary' }],
    },
  },
  (err, res) => {
    // Check for errors in our query and log them if they exist.
    if (err) return console.error('Free Busy Query Error: ', err)

    // Create an array of all events on our calendar during that time.
    const eventArr = res.data.calendars.primary.busy

    // Check if event array is empty which means we are not busy
    if (eventArr.length === 0)
      // If we are not busy create a new calendar event.
      return calendar.events.insert(
        { calendarId: 'primary', resource: event },
        err => {
          // Check for errors and log them if they exist.
          if (err) return console.error('Error Reserving Room:', err)
          // Else log that the event was created.
          return console.log('Calendar event successfully created.')
        }
      )
 
    // If event array is not empty log that we are busy.
    return console.log(`Sorry this room is busy...`)
  }
)