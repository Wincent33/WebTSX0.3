import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LineChart from "../../components/LineChart";
import rankData from "./RankingMock.json";
import { Tooltip } from "react-tooltip";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineLike,
  AiOutlineInteraction,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { MdOutlineRealEstateAgent } from "react-icons/md";
const DashExample = () => {
  const TopStats = ({ number, title }) => {
    return (
      <Box className="bg-primary4 h-fit w-fit p-2 text-center rounded-xl">
        <h1 className="text-2xl font-bold">{number}</h1>
        <h5 className="text-xl">{title}</h5>
      </Box>
    );
  };
  const RankingListing = (props) => {
    const {
      rank,
      id,
      title,
      imgUrl,
      alamat,
      provinsi,
      kabupaten,
      kecamatan,
      dilihat,
      deltaLihat,
      disimpan,
      deltaSimpan,
      pesan,
      deltaPesan,
      interaksi,
      deltaInteraksi,
    } = props;
    const Stats = ({ Icon, title, value, delta }) => {
      return (
        <div className=" bg-primary1 flex flex-row gap-1 w-[50%] justify-between">
          <div className="flex flex-col justify-between items-center">
            <Icon size={"50px"} color="white" />
            <label>{title}</label>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl">{value}</h1>
            <label className="text-lg text-[lightgreen]">{delta}</label>
          </div>
        </div>
      );
    };
    return (
      <div className="relative bg-primary1 flex flex-row p-5 rounded-3xl my-3">
        <div className=" bg-primary1 flex flex-col gap-1 w-[50%]">
          <h1 className="text-2xl">{title || "Judul"}</h1>
          <p className="text-white">{alamat || "Jl. Abc5Dasar"}</p>
          <p className="text-white">
            {kecamatan || "kecamatan"}, {kabupaten || "kecamatan"},{" "}
            {provinsi || "provinsi"}
          </p>
          <img
            src={
              imgUrl ||
              "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt=""
            className="h-40 w-80 rounded-xl"
          />
          <p className=" text-white">Id Listing: {id || "IdPalsu"}</p>
        </div>
        <div className=" bg-primary1 flex flex-col justify-center items-center gap-5 w-[50%]">
          <div className="flex flex-row gap-5 justify-between min-w-[220px]">
            <Stats
              Icon={AiOutlineEye}
              title="Dilihat"
              value={dilihat || 0}
              delta={deltaLihat || 0}
            />
            <Stats
              Icon={AiOutlineLike}
              title="Disimpan"
              value={disimpan || 0}
              delta={deltaSimpan || 0}
            />
          </div>
          <div className="flex flex-row gap-5 justify-between min-w-[220px]">
            <Stats
              Icon={AiOutlineMail}
              title="Pesan"
              value={pesan || 0}
              delta={deltaPesan || 0}
            />
            <Stats
              Icon={AiOutlineInteraction}
              title="Interaksi"
              value={interaksi || 0}
              delta={deltaInteraksi || 0}
            />
          </div>
        </div>
        <div className="absolute right-3 top-3 text-primary4 text-3xl font-bold">
          #{rank || 0}
        </div>
      </div>
    );
  };

  function createData(
    kategori,
    jan,
    feb,
    mar,
    apr,
    mei,
    jun,
    jul,
    agu,
    sep,
    okt,
    nov,
    des
  ) {
    return {
      kategori,
      jan,
      feb,
      mar,
      apr,
      mei,
      jun,
      jul,
      agu,
      sep,
      okt,
      nov,
      des,
    };
  }
  const rows = [
    createData("Harga Listing(Avg)", 1, 6.0, 24, 4.0, 2, 3, 5, 21, 3, 4, 1, 3),
    createData("Luas Tanah(Avg)", 237, 9.0, 37, 4.3, 2, 3, 5, 21, 3, 4, 1, 3),
    createData(
      "Luas Bangunan(Avg)",
      262,
      16.0,
      24,
      6.0,
      2,
      3,
      5,
      21,
      3,
      4,
      1,
      3
    ),
    createData(
      "Harga/m persegi (Avg)",
      305,
      3.7,
      67,
      4.3,
      2,
      3,
      5,
      21,
      3,
      4,
      1,
      3
    ),
    createData("Jumlah View", 356, 16.0, 49, 3.9, 2, 3, 5, 21, 3, 4, 1, 3),
    createData("Jumlah Pesan", 356, 16.0, 49, 3.9, 2, 3, 5, 21, 3, 4, 1, 3),
    createData(
      "Jumlah Listing disimpan",
      356,
      16.0,
      49,
      3.9,
      2,
      3,
      5,
      21,
      3,
      4,
      1,
      3
    ),
    createData("Jumlah interaksi", 356, 16.0, 49, 3.9, 2, 3, 5, 21, 3, 4, 1, 3),
  ];
  return (
    <Box className="m-5">
      {/* Title dan Report */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD UTAMA" subtitle="Selamat Datang, Joko" />
        <Box>
          <Button
            sx={{
              backgroundColor: "#ee6c4d",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Content */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box className="py-5 col-span-6 bg-primary5 flex h-fit flex-col gap-3 items-center justify-center rounded-3xl">
          <div className="flex flex-row justify-center items-center gap-2">
            <AiOutlineMail size={40} color="white" />
            <h1 className="text-3xl">Pesan</h1>
          </div>
          <div className="w-[70%] mx-5 h-1 bg-white" />
          <div className="flex flex-row gap-5">
            <TopStats number={14} title="Pesan Baru" />
            <TopStats number={14} title="Kotak Pesan" />
            <TopStats number={14} title="Arsip Pesan" />
          </div>
        </Box>
        <Box className="relative p-5 col-span-6 bg-primary5 flex h-fit flex-col gap-3 items-center justify-center rounded-3xl ">
          <div className="flex flex-row justify-center items-center gap-2">
            <MdOutlineRealEstateAgent size={40} color="white" />
            <h1 className="text-3xl">Listing</h1>
          </div>
          <div className="w-[70%] mx-5 h-1 bg-white" />
          <div className="flex flex-row gap-5">
            <TopStats number={0} title="Listing Aktif" />
            <TopStats number={0} title="Listing Lampau" />
            <TopStats number={0} title="Draft Listing" />
          </div>
          <div
            id="tambahListing"
            className="absolute p-1 top-4 right-4 rounded-full bg-primary4 cursor-pointer hover:bg-primary5 duration-300"
          >
            <AiOutlinePlusCircle color="white" size={40} />
          </div>
          <Tooltip
            anchorId="tambahListing"
            className=""
            place="left"
            content="Tambah Listing Baru"
          />
        </Box>
        {/* Row 2 */}
        <Box className="col-span-12 row-span-2 bg-primary5 rounded-3xl mt-10 h-fit">
          <Box className="p-5 flex justify-between items-center">
            <Box>
              <Typography variant="h5" fontWeight="600" color={"white"}>
                Jumlah Traffic Listing Anda
              </Typography>
              <Typography variant="h3" fontWeight="bold" color={"white"}>
                150,000 / Bulan
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: "white" }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* Row3 */}
        <Box className=" p-5 col-span-6 row-span-4 bg-primary5 rounded-3xl mt-14 overflow-y-auto">
          <Box className="flex items-center border-b-4 border-solid border-b-primary5">
            <h1 className="font-extrabold">Ranking Listing Anda</h1>
          </Box>

          {rankData.map((d) => (
            <RankingListing
              rank={d.rank}
              id={d.idListing}
              title={d.idListing}
              imgUrl={d.imgUrl}
              alamat={d.lokasi.alamat}
              provinsi={d.lokasi.provinsi}
              kabupaten={d.lokasi.kabupaten}
              kecamatan={d.lokasi.kecamatan}
              dilihat={d.stats.dilihat}
              deltaLihat={d.stats.deltaLihat}
              disimpan={d.stats.disimpan}
              deltaSimpan={d.stats.deltaSimpan}
              pesan={d.stats.pesan}
              deltaPesan={d.stats.deltaPesan}
              interaksi={d.stats.interaksi}
              deltaInteraksi={d.stats.deltaInteraksi}
            />
          ))}
        </Box>
        <Box className=" p-5 col-span-12 row-span-4 bg-primary5 rounded-3xl mt-14">
          <div className="text-3xl font-bold my-3">Statistik per Bulan</div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "fit" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Kategori</TableCell>
                  <TableCell align="right">Jan</TableCell>
                  <TableCell align="right">Feb</TableCell>
                  <TableCell align="right">Mar</TableCell>
                  <TableCell align="right">Apr</TableCell>
                  <TableCell align="right">Mei</TableCell>
                  <TableCell align="right">Jun</TableCell>
                  <TableCell align="right">Jul</TableCell>
                  <TableCell align="right">Agu</TableCell>
                  <TableCell align="right">Sep</TableCell>
                  <TableCell align="right">Okt</TableCell>
                  <TableCell align="right">Nov</TableCell>
                  <TableCell align="right">Des</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.kategori}
                    </TableCell>
                    <TableCell align="right">{row.jan}</TableCell>
                    <TableCell align="right">{row.feb}</TableCell>
                    <TableCell align="right">{row.mar}</TableCell>
                    <TableCell align="right">{row.apr}</TableCell>
                    <TableCell align="right">{row.mei}</TableCell>
                    <TableCell align="right">{row.jun}</TableCell>
                    <TableCell align="right">{row.jul}</TableCell>
                    <TableCell align="right">{row.agu}</TableCell>
                    <TableCell align="right">{row.sep}</TableCell>
                    <TableCell align="right">{row.okt}</TableCell>
                    <TableCell align="right">{row.nov}</TableCell>
                    <TableCell align="right">{row.des}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default DashExample;
