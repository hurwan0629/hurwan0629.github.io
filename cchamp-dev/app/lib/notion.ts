import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getNotionPageMarkdown(pageId: string): Promise<string | null> {
  try{
    console.log("안녕");
    console.log(process.env.NOTION_API_KEY);
    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdBlocks);
    return typeof mdString === "string" ? mdString : mdString.parent;
  }
  catch(e){
    return null;
  }
}