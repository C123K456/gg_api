const { Router } = require('express')
const router = Router()

const admin = require('firebase-admin');

const db = admin.firestore();

let today = new Date();
let dd = String(today.getDate());
let mm = String(today.getMonth() + 1);
let yyyy = today.getFullYear();

today = dd + "/" + mm + "/" + yyyy;
let DateToday = today.toString();


/*router.post("/api/employees", async (req, res) => {
    try {
        await db.collection("employees")
            .doc("/" + req.body.No + "/")
            .create({
                EmpID: req.body.EmpID,
                ThaiName: req.body.ThaiName,
                Dept: req.body.Dept,
                Section: req.body.Section

            })
        return res.status(204).json();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});*/


router.get("/api/employees/:employee_id", (req, res) => {
    (async () => {
        try {
            const doc = db.collection("employees").doc(req.params.employee_id);
            const item = await doc.get()
            const response = item.data()
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).send(error);
        }
    })();
});

router.get("/api/employees", async (req, res) => {
    try {
        const query = db.collection("employees");
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map((doc) => ({
            No: doc.No,
            ThaiName: doc.data().ThaiName,
            EmpID: doc.data().EmpID,
            Dept: doc.data().Dept,
            Section: doc.data().Section

        }));

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json();
    }
});

router.post("/api/formdata", async (req, res) => {
    try {
        await db.collection("formdata")
            .doc()
            .create({
                EmpID: req.body.EmpID,
                ActivityNum: req.body.ActivityNum,
                LocationType_Name: req.body.LocationType_Name,
                ThaiName: req.body.ThaiName,
                Dept: req.body.Dept,
                Assessment_date: req.body.Assessment_date,
                Time_periods: req.body.Time_periods,
                Location_details: req.body.Location_details,
                TambonThai: req.body.TambonThai,
                DistrictThai: req.body.DistrictThai,
                ProvinceThai: req.body.ProvinceThai,
                Section: req.body.Section,
                Trip_details: req.body.Trip_details,
                Explanation_risk: req.body.Explanation_risk,
                Preventive_measures: req.body.Preventive_measures,
                Physical_health: req.body.Physical_health,
            })
        return res.status(204).json();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

router.get("/api/formdatas", async (req, res) => {
    try {
        //var date = req.params.Assessment_date.toString();
        
        const query = db.collection("formdata");
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;


        const response = docs.map((doc) => ({
            
            EmpID: doc.data().EmpID,
            ActivityNum: doc.data().ActivityNum,
            LocationType_Name: doc.data().LocationType_Name,
            ThaiName: doc.data().ThaiName,
            Dept: doc.data().Dept,
            Assessment_date: doc.data().Assessment_date,
            Time_periods: doc.data().Time_periods,
            Location_details: doc.data().Location_details,
            TambonThai: doc.data().TambonThai,
            DistrictThai: doc.data().DistrictThai,
            ProvinceThai: doc.data().ProvinceThai,
            Section: doc.data().Section,
            Trip_details: doc.data().Trip_details,
            Explanation_risk: doc.data().Explanation_risk,
            Preventive_measures: doc.data().Preventive_measures,
            Physical_health: doc.data().Physical_health
        }));

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.get("/api/formdata:Empid_d", async (req, res) => {
    try {
        //var date = req.params.Assessment_date.toString();
        const empid = Number(req.params.Empid_d);
        const date = Number(req.params.Assessment_date);

        const query = db.collection("formdata").where("EmpID", "==", empid)
        .orderBy("ActivityNum", "asc");

        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;


        const response = docs.map((doc) => ({
            id: doc.id,
            EmpID: doc.data().EmpID,
            ActivityNum: doc.data().ActivityNum,
            LocationType_Name: doc.data().LocationType_Name,
            ThaiName: doc.data().ThaiName,
            Dept: doc.data().Dept,
            Assessment_date: doc.data().Assessment_date,
            Time_periods: doc.data().Time_periods,
            Location_details: doc.data().Location_details,
            TambonThai: doc.data().TambonThai,
            DistrictThai: doc.data().DistrictThai,
            ProvinceThai: doc.data().ProvinceThai,
            Section: doc.data().Section,
            
            Trip_details: doc.data().Trip_details,
            Explanation_risk: doc.data().Explanation_risk,
            Preventive_measures: doc.data().Preventive_measures,
            Physical_health: doc.data().Physical_health
        }));

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.get("/api/formdata:Empid_d/:ActivityNum_m", async (req, res) => {
    try {
        //var date = req.params.Assessment_date.toString();
        const empid = Number(req.params.Empid_d);
        const activityNum = Number(req.params.ActivityNum_m);

        const query = db.collection("formdata").where("EmpID", "==", empid).where("ActivityNum", "==", activityNum);
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;


        const response = docs.map((doc) => ({
            id: doc.id,
            EmpID: doc.data().EmpID,
            ActivityNum: doc.data().ActivityNum,
            LocationType_Name: doc.data().LocationType_Name,
            ThaiName: doc.data().ThaiName,
            Dept: doc.data().Dept,
            Assessment_date: doc.data().Assessment_date,
            Time_periods: doc.data().Time_periods,
            Location_details: doc.data().Location_details,
            TambonThai: doc.data().TambonThai,
            DistrictThai: doc.data().DistrictThai,
            ProvinceThai: doc.data().ProvinceThai,
            Section: doc.data().Section,
            
            Trip_details: doc.data().Trip_details,
            Explanation_risk: doc.data().Explanation_risk,
            Preventive_measures: doc.data().Preventive_measures,
            Physical_health: doc.data().Physical_health
        }));

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
});


/*
router.get("/api/productstime:timep", async (req, res) => {
    try {
      var tt = req.params.timep.toString();
  
      const query = db.collection("products").where('time', '==', tt);
      const querySnapshot = await query.get();
      const docs = querySnapshot.docs;
  
      const response = docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        time: doc.data().time
      }));
  
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).send(error);
    }
  });*/

router.put("/api/formdata/:docid/:Empid_d/:ActivityNum_m", async (req, res) => {

    const empid = Number(req.params.Empid_d);
    const activityNum = Number(req.params.ActivityNum_m);
    const docid = req.params.docid.toString();
    try {
        const document = db.collection("formdata").doc(docid)
        await document.update({
            EmpID: empid,
                ActivityNum: activityNum,
                LocationType_Name: req.body.LocationType_Name,
                ThaiName: req.body.ThaiName,
                Dept: req.body.Dept,
                Assessment_date: req.body.Assessment_date,
                Time_periods: req.body.Time_periods,
                Location_details: req.body.Location_details,
                TambonThai: req.body.TambonThai,
                DistrictThai: req.body.DistrictThai,
                ProvinceThai: req.body.ProvinceThai,
                Section: req.body.Section,
                Trip_details: req.body.Trip_details,
                Explanation_risk: req.body.Explanation_risk,
                Preventive_measures: req.body.Preventive_measures,
                Physical_health: req.body.Physical_health,
        });
        return res.status(200).json();
    } catch (error) {
        return res.status(500).json();
    }
});

router.delete("/api/formdata:docid", async (req, res) => {

    const docid = req.params.docid.toString();
    
    try {
        const document = db.collection("formdata").doc(docid);
        await document.delete();

        return res.status(200).json();
    } catch (error) {
        return res.status(500).json();
    }
});

router.post("/api/datasetmap", async (req, res) => {
    try {
        await db.collection("datasetmap")
            .doc()
            .create({
                time_id: req.body.time_id,
                name: req.body.name,
                longtitude: req.body.longtitude,
                latitude: req.body.latitude,
                date: req.body.date,
            })
        return res.status(204).json();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

router.get("/api/datasetmaps", async (req, res) => {
    try {
        const query = db.collection("datasetmap");
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;


        const response = docs.map((doc) => ({
            
            time_id: doc.data().time_id,
            name: doc.data().name,
            longtitude: doc.data().longtitude,
            latitude: doc.data().latitude,
            date: doc.data().date,
        }));

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

router.get("/api/favorites:Empid_d", async (req, res) => {
    try {
        //var date = req.params.Assessment_date.toString();
        const empid = Number(req.params.Empid_d);
    
        const query = db.collection("favorites").where("EmpID", "==", empid);
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;


        const response = docs.map((doc) => ({
            id: doc.id,
            EmpID: doc.data().EmpID,
            Location_details: doc.data().Location_details,
            TambonThai: doc.data().TambonThai,
            DistrictThai: doc.data().DistrictThai,
            ProvinceThai: doc.data().ProvinceThai,
           
        }));

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.post("/api/favorites", async (req, res) => {
    try {
        await db.collection("favorites")
            .doc()
            .create({
                EmpID: req.body.EmpID,
                Location_details: req.body.Location_details,
                TambonThai: req.body.TambonThai,
                DistrictThai: req.body.DistrictThai,
                ProvinceThai: req.body.ProvinceThai,
            })
        return res.status(204).json();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});


module.exports = router