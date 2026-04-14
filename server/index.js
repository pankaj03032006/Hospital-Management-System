require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Middlewares  -------------------------
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection --------------------
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("DB Error:", err));

// Routes Import -------------------------
const LoginRegisterRoute = require("./routes/LoginRegisterRoute");
const UserRoute = require("./routes/UserRoute");
const DashboardRoute = require("./routes/DashboardRoute");
const PatientRoute = require("./routes/PatientRoute");
const DoctorRoute = require("./routes/DoctorRoute");
const AppointmentRoute = require("./routes/AppointmentRoute");
const MedicineRoute = require("./routes/MedicineRoute");
const PrescriptionRoute = require("./routes/PrescriptionRoute");
const InvoiceRoute = require("./routes/InvoiceRoute");
const ProfileRoute = require("./routes/ProfileRoute");

// API Routes Middleware -----------------
app.use(LoginRegisterRoute);
app.use(DashboardRoute);
app.use(UserRoute);
app.use(PatientRoute);
app.use(DoctorRoute);
app.use(AppointmentRoute);
app.use(MedicineRoute);
app.use(PrescriptionRoute);
app.use(InvoiceRoute);
app.use(ProfileRoute);

app.use('/api/paypal', require('./routes/api/paypal'));

// Default Route -------------------------
app.get("/", (req, res) => {
    res.send("hello world");
});

// Start Server --------------------------
app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port " + (process.env.PORT || 5000));
});
