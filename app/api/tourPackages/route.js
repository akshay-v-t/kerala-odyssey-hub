import { headers } from 'next/headers';
import tourPackages from '@/data/tourPackages.json';

export async function GET(){
    return new Response(JSON.stringify(tourPackages),{
        status:200,
        headers: {'Content-Type' : 'application/json'},
    })
}