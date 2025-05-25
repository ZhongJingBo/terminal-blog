export interface NoteItem {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}


const API_BASE_URL = process.env.NODE_ENV === 'development' ? '/api': 'http://postforge.zhongzhong.top/api';

export const getNoteList = async (): Promise<NoteItem[]> => {
  try {
    const url = `${API_BASE_URL}/post/fixedlist/1`;
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    return data?.data;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
}; 


export const getNoteDetail = async (id: string): Promise<NoteItem> => {
  try {
    const url = `${API_BASE_URL}/post/detail/${id}`;
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data?.data;
  } catch (error) {
    console.error('Error fetching note detail:', error);
    throw error;
  }
};
