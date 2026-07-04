--
-- PostgreSQL database dump
--

\restrict Zq9lgw85yY13zutcqrruTyzwNK22y58cK4CT8KyxYnBiJXCcAQ32mLIRxNkOYRy

-- Dumped from database version 17.10
-- Dumped by pg_dump version 18.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- Name: allocations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.allocations (
    allocation_id uuid DEFAULT gen_random_uuid() NOT NULL,
    student_id uuid,
    domain character varying(100),
    mentor_name character varying(100),
    allocated_date date DEFAULT CURRENT_DATE,
    status character varying(30)
);


ALTER TABLE public.allocations OWNER TO postgres;

--
-- Name: interns; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.interns (
    intern_id integer NOT NULL,
    full_name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    contact_number character varying(15),
    college_name character varying(150),
    degree character varying(50),
    branch character varying(100),
    year character varying(20),
    domain character varying(100),
    status character varying(30) DEFAULT 'Pending'::character varying,
    task character varying(200),
    completion integer DEFAULT 0
);


ALTER TABLE public.interns OWNER TO postgres;

--
-- Name: interns_intern_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.interns_intern_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.interns_intern_id_seq OWNER TO postgres;

--
-- Name: interns_intern_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.interns_intern_id_seq OWNED BY public.interns.intern_id;


--
-- Name: internships; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.internships (
    internship_id uuid DEFAULT gen_random_uuid() NOT NULL,
    student_id uuid,
    start_date date,
    end_date date,
    status character varying(30)
);


ALTER TABLE public.internships OWNER TO postgres;

--
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    student_id uuid DEFAULT gen_random_uuid() NOT NULL,
    full_name character varying(100),
    email character varying(100),
    contact_number character varying(15),
    college_name character varying(150),
    branch character varying(100),
    year character varying(20),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.students OWNER TO postgres;

--
-- Name: task_history; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.task_history (
    history_id integer NOT NULL,
    intern_id integer,
    task character varying(200),
    overview text,
    completion integer,
    status character varying(30),
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    task_date date DEFAULT CURRENT_DATE,
    task_time time without time zone DEFAULT CURRENT_TIME
);


ALTER TABLE public.task_history OWNER TO postgres;

--
-- Name: task_history_history_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.task_history_history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.task_history_history_id_seq OWNER TO postgres;

--
-- Name: task_history_history_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.task_history_history_id_seq OWNED BY public.task_history.history_id;


--
-- Name: interns intern_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.interns ALTER COLUMN intern_id SET DEFAULT nextval('public.interns_intern_id_seq'::regclass);


--
-- Name: task_history history_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task_history ALTER COLUMN history_id SET DEFAULT nextval('public.task_history_history_id_seq'::regclass);


--
-- Data for Name: allocations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.allocations (allocation_id, student_id, domain, mentor_name, allocated_date, status) FROM stdin;
396421e6-40e0-49b1-bc6d-9c8971dda739	2829afcb-883c-4599-ad17-554a1380729c	Full Stack Development	Rahul Kumar	2026-06-11	ALLOCATED
\.


--
-- Data for Name: interns; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.interns (intern_id, full_name, email, contact_number, college_name, degree, branch, year, domain, status, task, completion) FROM stdin;
2	moin	moni@gmail.com	4567894356	ace	B.E	Computer Science	3rd Year	\N	Pending	\N	0
3	vinayagam	vinayagam@gmail.com	7634245676	ace	B.E	Information Technology	3rd Year	\N	Pending	\N	0
7	vinayagam	vinayagam234@gamil.com	7859434567	ace	B.E	Computer Science	4th Year	\N	Pending	\N	0
8	praveen	pravenn@gmail.com	9878987897	ace	B.E	Computer Science	3rd Year	\N	Pending	\N	0
9	fathima	fathima@gmail.com	1234567890	ace	B.E	Computer Science	3rd Year	Frontend Development	Active	\N	0
1	Bhuvaneswari R	bhuvaneswari.3tech@gmail.com	47456745	adhiyamm	BSc	Electronics	2nd Year	\N	In Progress	React Dashboard	98
11	Bhuvaneswari R	bhuvaneswari.tech@gmail.com	4567895433	ace	B.E	Computer Science	3rd Year	Frontend Development	Active	\N	0
12	kiran	kiran123@gmail.com	7689387455	ace	B.Tech	Information Technology	4th Year	Frontend Development	Active	\N	0
\.


--
-- Data for Name: internships; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.internships (internship_id, student_id, start_date, end_date, status) FROM stdin;
\.


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.students (student_id, full_name, email, contact_number, college_name, branch, year, created_at) FROM stdin;
2829afcb-883c-4599-ad17-554a1380729c	Bhuvaneswari	bhuvaneswari@gmail.com	9876543210	Adhiyamaan College	Computer Science	3rd Year	2026-06-11 10:42:27.845952
\.


--
-- Data for Name: task_history; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.task_history (history_id, intern_id, task, overview, completion, status, updated_at, task_date, task_time) FROM stdin;
1	11	React Dashboard	Connected React frontend with PostgreSQL backend	95	In Progress	2026-07-02 12:09:52.000362	2026-07-02	12:09:52.000362
\.


--
-- Name: interns_intern_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.interns_intern_id_seq', 12, true);


--
-- Name: task_history_history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.task_history_history_id_seq', 1, true);


--
-- Name: allocations allocations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.allocations
    ADD CONSTRAINT allocations_pkey PRIMARY KEY (allocation_id);


--
-- Name: interns interns_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.interns
    ADD CONSTRAINT interns_email_key UNIQUE (email);


--
-- Name: interns interns_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.interns
    ADD CONSTRAINT interns_pkey PRIMARY KEY (intern_id);


--
-- Name: internships internships_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.internships
    ADD CONSTRAINT internships_pkey PRIMARY KEY (internship_id);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (student_id);


--
-- Name: task_history task_history_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task_history
    ADD CONSTRAINT task_history_pkey PRIMARY KEY (history_id);


--
-- Name: allocations allocations_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.allocations
    ADD CONSTRAINT allocations_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(student_id);


--
-- Name: internships internships_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.internships
    ADD CONSTRAINT internships_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(student_id);


--
-- Name: task_history task_history_intern_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task_history
    ADD CONSTRAINT task_history_intern_id_fkey FOREIGN KEY (intern_id) REFERENCES public.interns(intern_id);


--
-- PostgreSQL database dump complete
--

\unrestrict Zq9lgw85yY13zutcqrruTyzwNK22y58cK4CT8KyxYnBiJXCcAQ32mLIRxNkOYRy

