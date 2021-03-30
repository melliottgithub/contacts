const db = require('../database/pg');

class Interview {
  constructor(data) {
    this.id = data.id;
    this.contactId = data.contactId;
    this.contactFullname = data.contactFullname;
    this.appointmentDate = data.appointmentDate;
    this.stage = data.stage;
  }

  static find() {
    return db
      .query('select * from interviews')
      .then((result) => result.rows.map(Interview.mapRow));
  }

  static mapRow(row) {
    return new Interview({
      id: row.id,
      contactId: row.contact_id,
      contactFullname: row.contact_fullname,
      appointmentDate: row.appointment_date,
      stage: row.stage,
    });
  }

  async save() {
    if (this.id > 0) {
      const result = await db.query(
        `
                UPDATE interviews
                SET contact_id=$1, contact_fullname=$2, appointment_date=$3, stage=$4
                WHERE id=$5
            `,
        [
          this.contactId,
          this.contactFullname,
          this.appointmentDate,
          this.stage,
          this.id,
        ]
      );
    } else {
      const result = await db.query(
        `
            INSERT INTO interviews
            (contact_id, contact_fullname, appointment_date, stage)
            VALUES ($1, $2, $3, $4)
            RETURNING id
        `,
        [this.contactId, this.contactFullname, this.appointmentDate, this.stage]
      );
      this.id = result.rows[0].id;
      return this;
    }
  }
}

module.exports = Interview;
/*
const Interview = require('./models/interview')
const interview = new Interview({
    contactId: '333333',
    contactFullname: 'Company 3',
    appointmentDate: new Date(),
    stage: 'stage 2'
});
interview.save();

const list = Interview.find()
*/
