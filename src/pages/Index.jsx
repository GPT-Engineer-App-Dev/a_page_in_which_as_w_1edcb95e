import React, { useState } from "react";
import { Select, Box, Heading, Text } from "@chakra-ui/react";

const countries = [
  { name: "United States", currency: "USD", states: ["California", "New York", "Texas"] },
  { name: "Canada", currency: "CAD", states: ["Ontario", "Quebec", "British Columbia"] },
  { name: "United Kingdom", currency: "GBP", states: ["England", "Scotland", "Wales"] },
];

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCountryChange = (event) => {
    const country = countries.find((c) => c.name === event.target.value);
    setSelectedCountry(country);
    setSelectedState(null);
    setSelectedCity(null);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity(null);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Country, State, and City Selector
      </Heading>

      <Select placeholder="Select a country" mb={4} onChange={handleCountryChange}>
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </Select>

      {selectedCountry && (
        <Box mb={4}>
          <Text>
            Selected Country: {selectedCountry.name} (Currency: {selectedCountry.currency})
          </Text>
          <Select placeholder="Select a state" mt={2} onChange={handleStateChange}>
            {selectedCountry.states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
        </Box>
      )}

      {selectedState && (
        <Box mb={4}>
          <Text>Selected State: {selectedState}</Text>
          <Select placeholder="Select a city" mt={2} onChange={handleCityChange}>
            <option value="City 1">City 1</option>
            <option value="City 2">City 2</option>
            <option value="City 3">City 3</option>
          </Select>
        </Box>
      )}

      {selectedCity && (
        <Box>
          <Text>Selected City: {selectedCity}</Text>
        </Box>
      )}
    </Box>
  );
};

export default Index;
