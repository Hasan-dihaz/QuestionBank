import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const ClientsRegistration = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
  } = useForm();
  return (
    <div className="flex flex-wrap gap-2 justify-around">
      <Controller
        name="Name"
        control={control}
        defaultValue="" // Set the default value if needed
        render={({ field }) => (
          <TextField {...field} label="Full Name" variant="outlined" />
        )}
      />
      <Controller
        name="Coaching"
        control={control}
        defaultValue="" // Set the default value if needed
        render={({ field }) => (
          <TextField {...field} label="Coaching" variant="outlined" />
        )}
      />
      <Controller
        name="Mobile"
        control={control}
        defaultValue="" // Set the default value if needed
        render={({ field }) => (
          <TextField {...field} label="Mobile" variant="outlined" />
        )}
      />
      <Controller
        name="gender"
        control={control}
        defaultValue="" // Set the default value if needed
        render={({ field }) => (
          <TextField {...field} label="Gender" variant="outlined" />
        )}
      />
      <Controller
        name="district"
        control={control}
        defaultValue="" // Set the default value if needed
        render={({ field }) => (
          <TextField {...field} label="District" variant="outlined" />
        )}
      />
      <Controller
        name="thana"
        control={control}
        defaultValue="" // Set the default value if needed
        render={({ field }) => (
          <TextField {...field} label="Thana" variant="outlined" />
        )}
      />
      <Controller
        name="village"
        control={control}
        defaultValue="" // Set the default value if needed
        render={({ field }) => (
          <TextField {...field} label="Village" variant="outlined" />
        )}
      />

      <Controller
        name="fb"
        control={control}
        defaultValue="" // Set the default value if needed
        render={({ field }) => (
          <TextField {...field} label="Facebook Link" variant="outlined" />
        )}
      />
      <Controller
        name="address"
        control={control}
        defaultValue="" // Set the default value if needed
        render={({ field }) => (
          <TextField {...field} label="Address" variant="outlined" />
        )}
      />
      <Controller
        name="email"
        control={control}
        defaultValue="" // Set the default value if needed
        render={({ field }) => (
          <TextField {...field} label="Email" variant="outlined" />
        )}
      />
    </div>
  );
};

export default ClientsRegistration;
