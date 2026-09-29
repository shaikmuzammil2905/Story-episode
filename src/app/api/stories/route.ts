import { NextResponse } from 'next/server';
import { mockStories } from '../../../data/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') || 'published';
  const sort = searchParams.get('sort') || 'latest';
  const limitParam = searchParams.get('limit');
  const limit = limitParam ? parseInt(limitParam, 10) : 10;
  
  try {
    // 1. Filter by status gracefully
    let filteredStories = mockStories;
    if (status === 'published') {
      filteredStories = filteredStories.filter(s => s.published === true);
    }
    
    // 2. Sort gracefully (fallback to latest if sort not specified)
    if (sort === 'trending') {
      filteredStories = filteredStories.filter(s => s.isTrending);
    } else if (sort === 'popular') {
      filteredStories = filteredStories.filter(s => s.isFeatured);
    } else {
      // 'latest' default
      filteredStories = [...filteredStories].reverse();
    }
    
    // 3. Limit gracefully
    if (limit > 0) {
      filteredStories = filteredStories.slice(0, limit);
    }
    
    return NextResponse.json({
      success: true,
      data: filteredStories,
      message: filteredStories.length ? "Stories fetched successfully" : "No stories found for this filter"
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      data: [],
      message: "Internal server error while fetching stories."
    }, { status: 500 });
  }
}
