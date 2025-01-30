"use client";

import React from "react";

import { Property } from "../../types/common";
import PropertyCard from "@/components/shared/cards/propertyCard";

// Mock Property Data
const properties: Property[] = [
  {
    id: 1,
    title: "2 Bedroom Luxury Shortlet Apartment",
    location: "Lagos, Nigeria",
    price: "NGN130,000",
    minNights: 3,
    rating: 4.6,
    reviews: 79,
    images: [
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
    ],
    agencyLogo:
      "https://s3-alpha-sig.figma.com/img/977b/d638/b4e0662d5279b11ab4add430b14174f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnm9Acryh6nutNY5yy6h3mOxVgvPffspuibAs-ayjHfEJKjLWn5KaMKcdp7JW7z5cf1UE-VF8UTZlx5fxqCKhhPrZZ9xL5T6wwvBliaXPdEkzY-wBmBgZ7BfOrbhlxb47hze4AnPAqI8HVxdbuAM9OxN8AMUbpHHBLm7rH7LmXxxxQRNz0xCGtps2wr28h2L9p-f~g0zS0Xyi6wLp~SaalmL4mZB1Fja30Kd859COFhpYP5~F0wfR-xs9z34j7GozJ9x7mMPHSHYN5wC46PpZQ9ilQqnGjK7iXZOqRiBtRZHLvaZGIMLfwdWcuwAbsLCJGGR1~-UJ-NQZ4eVO6C6hA__",
    agencyName: "Eleven Homes",
  },
  {
    id: 2,
    title: "2 Bedroom Luxury Shortlet Apartment",
    location: "Lagos, Nigeria",
    price: "NGN130,000",
    minNights: 3,
    rating: 4.6,
    reviews: 79,
    images: [
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
    ],
    agencyLogo:
      "https://s3-alpha-sig.figma.com/img/977b/d638/b4e0662d5279b11ab4add430b14174f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnm9Acryh6nutNY5yy6h3mOxVgvPffspuibAs-ayjHfEJKjLWn5KaMKcdp7JW7z5cf1UE-VF8UTZlx5fxqCKhhPrZZ9xL5T6wwvBliaXPdEkzY-wBmBgZ7BfOrbhlxb47hze4AnPAqI8HVxdbuAM9OxN8AMUbpHHBLm7rH7LmXxxxQRNz0xCGtps2wr28h2L9p-f~g0zS0Xyi6wLp~SaalmL4mZB1Fja30Kd859COFhpYP5~F0wfR-xs9z34j7GozJ9x7mMPHSHYN5wC46PpZQ9ilQqnGjK7iXZOqRiBtRZHLvaZGIMLfwdWcuwAbsLCJGGR1~-UJ-NQZ4eVO6C6hA__",
    agencyName: "Eleven Homes",
  },
  {
    id: 3,
    title: "2 Bedroom Luxury Shortlet Apartment",
    location: "Lagos, Nigeria",
    price: "NGN130,000",
    minNights: 3,
    rating: 4.6,
    reviews: 79,
    images: [
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
    ],
    agencyLogo:
      "https://s3-alpha-sig.figma.com/img/977b/d638/b4e0662d5279b11ab4add430b14174f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnm9Acryh6nutNY5yy6h3mOxVgvPffspuibAs-ayjHfEJKjLWn5KaMKcdp7JW7z5cf1UE-VF8UTZlx5fxqCKhhPrZZ9xL5T6wwvBliaXPdEkzY-wBmBgZ7BfOrbhlxb47hze4AnPAqI8HVxdbuAM9OxN8AMUbpHHBLm7rH7LmXxxxQRNz0xCGtps2wr28h2L9p-f~g0zS0Xyi6wLp~SaalmL4mZB1Fja30Kd859COFhpYP5~F0wfR-xs9z34j7GozJ9x7mMPHSHYN5wC46PpZQ9ilQqnGjK7iXZOqRiBtRZHLvaZGIMLfwdWcuwAbsLCJGGR1~-UJ-NQZ4eVO6C6hA__",
    agencyName: "Eleven Homes",
  },
  {
    id: 4,
    title: "2 Bedroom Luxury Shortlet Apartment",
    location: "Lagos, Nigeria",
    price: "NGN130,000",
    minNights: 3,
    rating: 4.6,
    reviews: 79,
    images: [
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
    ],
    agencyLogo:
      "https://s3-alpha-sig.figma.com/img/977b/d638/b4e0662d5279b11ab4add430b14174f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnm9Acryh6nutNY5yy6h3mOxVgvPffspuibAs-ayjHfEJKjLWn5KaMKcdp7JW7z5cf1UE-VF8UTZlx5fxqCKhhPrZZ9xL5T6wwvBliaXPdEkzY-wBmBgZ7BfOrbhlxb47hze4AnPAqI8HVxdbuAM9OxN8AMUbpHHBLm7rH7LmXxxxQRNz0xCGtps2wr28h2L9p-f~g0zS0Xyi6wLp~SaalmL4mZB1Fja30Kd859COFhpYP5~F0wfR-xs9z34j7GozJ9x7mMPHSHYN5wC46PpZQ9ilQqnGjK7iXZOqRiBtRZHLvaZGIMLfwdWcuwAbsLCJGGR1~-UJ-NQZ4eVO6C6hA__",
    agencyName: "Eleven Homes",
  },
  {
    id: 5,
    title: "2 Bedroom Luxury Shortlet Apartment",
    location: "Lagos, Nigeria",
    price: "NGN130,000",
    minNights: 3,
    rating: 4.6,
    reviews: 79,
    images: [
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
    ],
    agencyLogo:
      "https://s3-alpha-sig.figma.com/img/977b/d638/b4e0662d5279b11ab4add430b14174f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnm9Acryh6nutNY5yy6h3mOxVgvPffspuibAs-ayjHfEJKjLWn5KaMKcdp7JW7z5cf1UE-VF8UTZlx5fxqCKhhPrZZ9xL5T6wwvBliaXPdEkzY-wBmBgZ7BfOrbhlxb47hze4AnPAqI8HVxdbuAM9OxN8AMUbpHHBLm7rH7LmXxxxQRNz0xCGtps2wr28h2L9p-f~g0zS0Xyi6wLp~SaalmL4mZB1Fja30Kd859COFhpYP5~F0wfR-xs9z34j7GozJ9x7mMPHSHYN5wC46PpZQ9ilQqnGjK7iXZOqRiBtRZHLvaZGIMLfwdWcuwAbsLCJGGR1~-UJ-NQZ4eVO6C6hA__",
    agencyName: "Eleven Homes",
  },
  {
    id: 6,
    title: "2 Bedroom Luxury Shortlet Apartment",
    location: "Lagos, Nigeria",
    price: "NGN130,000",
    minNights: 3,
    rating: 4.6,
    reviews: 79,
    images: [
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
      "https://s3-alpha-sig.figma.com/img/8b3f/d955/c7fc59ccb82a37490103148c5ec56556?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2WFZ1~qcUpL9D9KZPrjLheoejUHzz7faITbB9ZvziJfMN1Jtm~fJpLOFZQ2mDQ36WVaVhh-B-cmUA7cuHN6WIt7FsN9KclE7V5PLiGzU82H2ESBG7gLCHc~eZyA2BBCGJaT2WwqJSAR9vrFrO~GK0bxGpgG1eJFEJBSAWwaRDfhC4qR11TXEFFAvoFAwtmly78YoUC67dw10gI~dYGd~RmHBttTDgTZtC0q8QxcaABRjYtpMNt5xchJt2AVp29sNaNbiiPZasZj7SQkHi3z3CottTwu92iEvroynujypPP1giw99iXQNX0OQzud127qShD1d3TzucMXT7XnbztmRQ__",
    ],
    agencyLogo:
      "https://s3-alpha-sig.figma.com/img/977b/d638/b4e0662d5279b11ab4add430b14174f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnm9Acryh6nutNY5yy6h3mOxVgvPffspuibAs-ayjHfEJKjLWn5KaMKcdp7JW7z5cf1UE-VF8UTZlx5fxqCKhhPrZZ9xL5T6wwvBliaXPdEkzY-wBmBgZ7BfOrbhlxb47hze4AnPAqI8HVxdbuAM9OxN8AMUbpHHBLm7rH7LmXxxxQRNz0xCGtps2wr28h2L9p-f~g0zS0Xyi6wLp~SaalmL4mZB1Fja30Kd859COFhpYP5~F0wfR-xs9z34j7GozJ9x7mMPHSHYN5wC46PpZQ9ilQqnGjK7iXZOqRiBtRZHLvaZGIMLfwdWcuwAbsLCJGGR1~-UJ-NQZ4eVO6C6hA__",
    agencyName: "Eleven Homes",
  },
];

const ApartmentGrid: React.FC = () => {
  return (
    <div className="max-w-full p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property) => (
          <div key={property.id} className="w-full">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApartmentGrid;
