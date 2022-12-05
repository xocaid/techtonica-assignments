-- TERMINAL COMMAND: pg_dump -d nameOfDatabase; 
-- Purpose: pg_dump creates a back-up of your database by extracting it(database) into a script file.
-- Create nameOfFile.sql file(in db folder) on server side, paste & save pg_dump script file, need to comment out info after "SET"
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: events; Type: TABLE; Schema: public; Owner: tpl522_10
--

CREATE TABLE public.events (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(100) NOT NULL,
    date character varying(20) NOT NULL,
    category character varying(50) NOT NULL
);


ALTER TABLE public.events OWNER TO tpl522_10;

--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_10
--

CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_id_seq OWNER TO tpl522_10;

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_10
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl522_10
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(50) NOT NULL
);


ALTER TABLE public.users OWNER TO tpl522_10;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_10
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO tpl522_10;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_10
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: tpl522_10
--

COPY public.events (id, name, description, date, category) FROM stdin;
1111	Rose Apothecary Launch Event	Friends & Family Sale	12/03/22	Social
549	Schitt's Creek Vacation	Visiting Patrick for the day	10/13/22	Personal
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl522_10
--

COPY public.users (id, name, email) FROM stdin;
9	David Rose	davidR@screek.com
10	Moira Rose	moiraR@screek.com
11	Johnny Rose	johnnyR@screek.com
12	Stevie Budd	stevieB@screek.com
13	Jocelyn Schitt	jocelynS@screek.com
17	sdvdbv	sdvwe@aol.com
\.


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_10
--

SELECT pg_catalog.setval('public.events_id_seq', 1, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_10
--

SELECT pg_catalog.setval('public.users_id_seq', 17, true);


--
-- Name: events events_description_key; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_description_key UNIQUE (description);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--