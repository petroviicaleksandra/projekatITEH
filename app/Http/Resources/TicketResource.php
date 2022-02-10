<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TicketResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
   
    public static $wrap = 'ticket';
    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'user'=> $this->resource->user_id,
            'movie_id'=> $this->resource->movie_id
        ];
    }
}
