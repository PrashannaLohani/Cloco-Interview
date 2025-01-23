import React, { useState, useEffect, useRef } from "react";
import { Autocomplete, TextField, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search({
  options = [],
  onSelect = () => {},
  shortcutKey = "f",
  width = "200px",
}) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  // Show search box on specified shortcut (default: Ctrl+F)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === shortcutKey) {
        e.preventDefault(); // Prevent browser's default search
        setSearchVisible(true);
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shortcutKey]);

  // Close search box on "Escape"
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        setSearchVisible(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <>
      {searchVisible && (
        <Autocomplete
          freeSolo
          options={options}
          onInputChange={(event, value) => setSearchTerm(value)}
          onChange={(event, value) => {
            setSearchVisible(false); // Hide search after selection
            onSelect(value); // Callback for item selection
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              inputRef={searchInputRef}
              variant="outlined"
              placeholder="Search..."
              InputProps={{
                ...params.InputProps,
                startAdornment: <SearchIcon sx={{ mr: 1 }} />,
              }}
            />
          )}
          sx={{
            width: width,
            zIndex: 1300,
            boxShadow: 3,
            borderRadius: "1rem",
          }}
        />
      )}
    </>
  );
}
