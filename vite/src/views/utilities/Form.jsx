import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfBirth: null,
    address: '',
    timezone: '',
    gender: '',
    country: '',
    phoneNumber: '',
    occupation: '',
    agreeTerms: false,
    notifications: true,
    experience: 1,
  });

  const [submitColor, setSubmitColor] = useState('primary');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (e) => {
    setFormData({ ...formData, notifications: e.target.checked });
  };

  const handleSliderChange = (e, value) => {
    setFormData({ ...formData, experience: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateOfBirth: date });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, agreeTerms: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid =
      formData.name &&
      formData.email &&
      formData.dateOfBirth &&
      formData.address &&
      formData.phoneNumber &&
      formData.agreeTerms;

    if (!isFormValid) {
      setSubmitColor('error');
      return;
    }

    console.log('Form Data:', formData);
    setSubmitColor('success');
    setTimeout(() => setSubmitColor('primary'), 1000);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px', margin: 'auto' }}
      >
        <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
        <TextField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
        <DatePicker
          label="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TextField label="Address" name="address" value={formData.address} onChange={handleChange} required />
        <TextField label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        <TextField label="Occupation" name="occupation" value={formData.occupation} onChange={handleChange} />

        {/* Timezone Dropdown with Names */}
        <FormControl>
          <InputLabel>Timezone</InputLabel>
          <Select name="timezone" value={formData.timezone} onChange={handleChange}>
            <MenuItem value="UTC-12:00">UTC-12:00 - Baker Island Time</MenuItem>
            <MenuItem value="UTC-11:00">UTC-11:00 - Samoa Standard Time</MenuItem>
            <MenuItem value="UTC-10:00">UTC-10:00 - Hawaii-Aleutian Standard Time</MenuItem>
            <MenuItem value="UTC-09:00">UTC-09:00 - Alaska Standard Time</MenuItem>
            <MenuItem value="UTC-08:00">UTC-08:00 - Pacific Standard Time</MenuItem>
            <MenuItem value="UTC-07:00">UTC-07:00 - Mountain Standard Time</MenuItem>
            <MenuItem value="UTC-06:00">UTC-06:00 - Central Standard Time</MenuItem>
            <MenuItem value="UTC-05:00">UTC-05:00 - Eastern Standard Time</MenuItem>
            <MenuItem value="UTC-04:00">UTC-04:00 - Atlantic Standard Time</MenuItem>
            <MenuItem value="UTC-03:00">UTC-03:00 - Argentina Time</MenuItem>
            <MenuItem value="UTC-02:00">UTC-02:00 - South Georgia Time</MenuItem>
            <MenuItem value="UTC-01:00">UTC-01:00 - Azores Time</MenuItem>
            <MenuItem value="UTC+00:00">UTC+00:00 - Greenwich Mean Time</MenuItem>
            <MenuItem value="UTC+01:00">UTC+01:00 - Central European Time</MenuItem>
            <MenuItem value="UTC+02:00">UTC+02:00 - Eastern European Time</MenuItem>
            <MenuItem value="UTC+03:00">UTC+03:00 - Moscow Time</MenuItem>
            <MenuItem value="UTC+04:00">UTC+04:00 - Gulf Standard Time</MenuItem>
            <MenuItem value="UTC+05:00">UTC+05:00 - Pakistan Standard Time</MenuItem>
            <MenuItem value="UTC+06:00">UTC+06:00 - Bangladesh Standard Time</MenuItem>
            <MenuItem value="UTC+07:00">UTC+07:00 - Indochina Time</MenuItem>
            <MenuItem value="UTC+08:00">UTC+08:00 - China Standard Time</MenuItem>
            <MenuItem value="UTC+09:00">UTC+09:00 - Japan Standard Time</MenuItem>
            <MenuItem value="UTC+10:00">UTC+10:00 - Australian Eastern Standard Time</MenuItem>
            <MenuItem value="UTC+11:00">UTC+11:00 - Solomon Islands Time</MenuItem>
            <MenuItem value="UTC+12:00">UTC+12:00 - New Zealand Standard Time</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>Country</InputLabel>
          <Select name="country" value={formData.country} onChange={handleChange}>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
            <MenuItem value="Germany">Germany</MenuItem>
          </Select>
        </FormControl>

        <RadioGroup name="gender" value={formData.gender} onChange={handleChange} row>
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>

        <FormControlLabel control={<Switch checked={formData.notifications} onChange={handleSwitchChange} />} label="Receive Notifications" />

        <label>Experience (Years)</label>
        <Box display="flex" alignItems="center" gap={2}>
          <span>{formData.experience}</span>
          <Slider value={formData.experience} onChange={handleSliderChange} min={0} max={20} step={1} />
        </Box>

        <FormControlLabel control={<Checkbox checked={formData.agreeTerms} onChange={handleCheckboxChange} />} label="I agree to the terms and conditions" />

        <Button type="submit" variant="contained" color={submitColor}>
          Submit
        </Button>
      </form>
    </LocalizationProvider>
  );
};

export default FormComponent;
