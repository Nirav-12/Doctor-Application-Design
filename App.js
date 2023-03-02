import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuProvider } from "react-native-popup-menu";

import DoctorsList from "./src/screen/DoctorsList";
import DoctorsDetails from "./src/screen/DoctorsDetails";
import SelectTimeSlot from "./src/screen/SelectTimeSlot";
import Reschedule from "./src/screen/Reschedule";
import DoctorReviews from "./src/screen/DoctorReviews ";
import DoctorWriteReview from "./src/screen/DoctorWriteReview ";
import MyAppointment from "./src/screen/MyAppointment";
import BookAppointment from "./src/screen/BookAppointment";
import AppointmentConfirmed from "./src/screen/AppointmentConfirmed";
import EditPatientDetails from "./src/screen/EditPatientDetails";
import AppointmentCancellation from "./src/screen/AppointmentCancellation";
import AppointmentCancelled from "./src/screen/AppointmentCancelled";
import Info from "./src/screen/Info";
import Coupons from "./src/screen/Coupons";
import Header from "./src/comp/Header";

export default function App() {
  let Stack = createNativeStackNavigator();

  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={DoctorsList}
            name="DoctorsList"
            options={{
              header: () => <Header title="Doctor" icon="search1" />,
            }}
          />
          {/* <Stack.Screen
            component={DoctorsDetails}
            name="DoctorsDetails"
            options={{
              header: () => <Header />,
            }}
          /> */}
          {/* <Stack.Screen
            component={SelectTimeSlot}
            name="SelectTimeSlot"
            options={{
              header: () => <Header title="Select a time slot" />,
            }}
          /> */}
          {/* <Stack.Screen
            component={Reschedule}
            name="Reschedule"
            options={{
              header: () => <Header title="Reschedule" />,
            }}
          /> */}
          {/* <Stack.Screen
            component={DoctorReviews}
            name="DoctorReviews"
            options={{
              header: () => <Header title="Reviews" center />,
            }}
          /> */}

          {/* <Stack.Screen
            component={DoctorWriteReview}
            name="DoctorWriteReview"
            options={{
              header: () => <Header title="Write review" center />,
            }}
          /> */}
          {/* <Stack.Screen
            component={MyAppointment}
            name="MyAppointment"
            // options={{ headerTitle: "My Appointments" }}
            options={{
              header: () => <Header title="My Appointments" />,
            }}
          /> */}
          {/* 
          <Stack.Screen
            component={BookAppointment}
            name="BookAppointment"
            options={{
              header: () => <Header title="Book Appointment" />,
            }}
          /> */}
          {/* <Stack.Screen
            component={AppointmentConfirmed}
            name="AppointmentConfirmed"
            options={{
              header: () => (
                <Header title=" Appointment Confirmed" color="#0C8A12" />
              ),
            }}
          /> */}
          {/* 
          <Stack.Screen
            component={EditPatientDetails}
            name="EditPatientDetails"
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            component={AppointmentCancellation}
            name="AppointmentCancellation"
            options={{
              header: () => (
                <Header title="Appointment Cancellation" color="#FF4040" />
              ),
            }}
          /> */}
          {/* <Stack.Screen
            component={AppointmentCancelled}
            name="AppointmentCancelled"
            options={{
              header: () => (
                <Header
                  title="Appointment Cancelled"
                  color="#FF4040"
                  icon="questioncircle"
                />
              ),
            }}
          /> */}
          {/* <Stack.Screen
            component={Info}
            name="Info"
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            component={Coupons}
            name="Coupons"
            options={{
              header: () => <Header title="Coupons" />,
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
