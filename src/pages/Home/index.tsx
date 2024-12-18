import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ContainedButton } from "../../components/ContainedButton";
import { HomeCategoriesSection } from "../../components/HomeCategoriesSection";
import { SearchBar } from "../../components/SearchBar";
import { SeedingWarningAlert } from "../../components/SeedingWarningAlert";
import { normalizeMemeTags } from "../../helpers/utils";
import { getAllMemes } from "../../queries/memes";
import { Meme } from "../../supabase/types";

export const HomePage = () => {
  const navigate = useNavigate();

  const [memeList, setMemeList] = useState<Meme[]>([]);

  const { supabaseClient } = useSessionContext();

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const { data, error } = await getAllMemes(supabaseClient);
        if (error) {
          throw error;
        }
        if (data) {
          const memeData = data.map((meme) => normalizeMemeTags(meme));
          setMemeList(memeData);
        }
      } catch (error) {
        toast.error((error as Error).message);
      }
    };
    fetchMemes();
  }, [supabaseClient]);
  return (
    <Container maxWidth="xl" sx={{ paddingY: 4 }}>
      <SeedingWarningAlert />
      <Box display={"flex"}>
        <SearchBar />
        <ContainedButton
          sx={{ marginLeft: 2 }}
          onClick={() => navigate("/meme/create")}
        >
          Upload Meme
        </ContainedButton>
      </Box>
      <HomeCategoriesSection sectionTitle={"Latest"} memeList={memeList} />
    </Container>
  );
};
